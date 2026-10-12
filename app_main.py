"""
app_main.py — compatibility shim.

The canonical application factory now lives in app/main.py.
This file re-exports `app` so that existing references to
`uvicorn app_main:app` keep working during the transition.
"""

from app.main import app  # noqa: F401

__all__ = ["app"]
