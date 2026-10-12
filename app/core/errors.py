"""
Custom domain exceptions for MUMBAI express.
"""


class MumbaiExpressError(Exception):
    """
    Base exception for all MUMBAI express domain errors.
    Enables centralized catch-and-recover error boundaries in webhook & REST layers
    to guarantee graceful responses (neutral fallback text) instead of unhandled 500 crashes.
    """

    pass


class SSRFSecurityError(MumbaiExpressError):
    """Raised when an outbound URL points to private or restricted network addresses."""

    pass


class IngestionError(MumbaiExpressError):
    """Raised when media extraction or OCR/ASR fails."""

    pass


class LanguageDetectionError(MumbaiExpressError):
    """Raised when language detection fails or confidence is too low."""

    pass


class TranslationError(MumbaiExpressError):
    """Raised when machine translation fails."""

    pass


class RetrievalError(MumbaiExpressError):
    """Raised when evidence search or fact-check API fails."""

    pass


class RetrievalBudgetExceeded(RetrievalError):
    """Raised when the retrieval stage exhausts its allocated time budget."""

    pass


class VerificationError(MumbaiExpressError):
    """Raised when verification rule engine fails."""

    pass


class ExplanationError(MumbaiExpressError):
    """Raised when response generation or JSON schema validation fails."""

    pass


class RateLimitExceededError(MumbaiExpressError):
    """Raised when user exceeds allowed requests per minute."""

    pass
