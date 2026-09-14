// Basic shape check — needs an "@" and a domain with a dot.
const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmailFormat(email: string): boolean {
  return EMAIL_SHAPE.test(email.trim());
}

/**
 * Heuristic check for emails that look randomly generated rather than
 * real — e.g. "x7f92kd3@gmail.com" — lots of digits mixed through the
 * local part (the bit before the @), especially outnumbering letters.
 * Not a hard guarantee, just a sanity filter to catch obvious junk.
 */
export function looksLikeFakeEmail(email: string): boolean {
  const local = email.trim().split("@")[0] || "";
  const digitCount = (local.match(/\d/g) || []).length;
  const letterCount = (local.match(/[a-zA-Z]/g) || []).length;

  if (local.length >= 6 && digitCount >= 4 && digitCount >= letterCount) {
    return true;
  }
  return false;
}

/**
 * Runs both checks and returns a user-facing error message, or null if
 * the email passes.
 */
export function getEmailValidationError(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) {
    return "Please enter your email address.";
  }
  if (!isValidEmailFormat(trimmed)) {
    return "Please enter a valid email address.";
  }
  if (looksLikeFakeEmail(trimmed)) {
    return "That email address doesn't look right — please double check it.";
  }
  return null;
}
