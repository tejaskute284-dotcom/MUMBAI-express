"""
app/core/gemini_client.py
Centralized Gemini API wrapper with automatic retry + exponential backoff.
Free-tier quota: 5 requests/min. Handles 429 RESOURCE_EXHAUSTED gracefully.
"""
from __future__ import annotations

import logging
import re
import time
from typing import Optional

logger = logging.getLogger(__name__)
_MAX_RETRIES = 2
_MAX_WAIT_SECONDS = 3.0


def _parse_retry_delay(error_message: str) -> float:
    match = re.search(r"retry in (\d+(?:\.\d+)?)s", str(error_message))
    if match:
        return min(float(match.group(1)), _MAX_WAIT_SECONDS)
    return 1.5


def call_gemini(
    prompt: str,
    api_key: str,
    model: str = "gemini-3.5-flash-lite",
    max_retries: int = _MAX_RETRIES,
) -> Optional[str]:
    if not api_key:
        return None
    try:
        from google import genai
    except ImportError:
        logger.warning("google-genai not installed.")
        return None

    client = genai.Client(api_key=api_key)
    for attempt in range(1, max_retries + 1):
        try:
            response = client.models.generate_content(model=model, contents=prompt)
            if response and response.text:
                return response.text.strip()
            return None
        except Exception as exc:
            error_str = str(exc)
            if "429" in error_str or "RESOURCE_EXHAUSTED" in error_str:
                if attempt < max_retries:
                    wait_time = _parse_retry_delay(error_str)
                    logger.warning(
                        "Gemini 429 hit (attempt %d/%d). Waiting %.1fs...",
                        attempt,
                        max_retries,
                        wait_time,
                    )
                    time.sleep(wait_time)
                    continue
                else:
                    logger.warning("Gemini 429: all %d retries exhausted. Fast-failing to deterministic fallback.", max_retries)
                    return None
            logger.warning("Gemini call failed (attempt %d/%d): %s", attempt, max_retries, exc)
            return None
    return None
