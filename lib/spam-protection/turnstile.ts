import type { TurnstileServerValidationResponse } from '@marsidev/react-turnstile';

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

interface ValidationResult {
  success: boolean;
  error?: string;
}

/**
 * Validates a Turnstile token with Cloudflare's API
 */
export async function validateTurnstileToken(
  token: string | null | undefined,
  remoteIp?: string
): Promise<ValidationResult> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  // Skip validation in development if not configured
  if (!secretKey) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Turnstile] Validation skipped - TURNSTILE_SECRET_KEY not set');
      return { success: true };
    }
    console.error('[Turnstile] TURNSTILE_SECRET_KEY not configured');
    return { success: false, error: 'Server configuration error' };
  }

  // Token is required when Turnstile is configured
  if (!token) {
    return { success: false, error: 'Verification token missing' };
  }

  try {
    const body = new URLSearchParams({
      secret: secretKey,
      response: token,
    });

    if (remoteIp) {
      body.append('remoteip', remoteIp);
    }

    const response = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });

    const data: TurnstileServerValidationResponse = await response.json();

    if (!data.success) {
      console.warn('[Turnstile] Validation failed:', data['error-codes']);
      return { success: false, error: 'Verification failed. Please try again.' };
    }

    return { success: true };
  } catch (error) {
    console.error('[Turnstile] API error:', error);
    return { success: false, error: 'Verification service unavailable' };
  }
}

/**
 * Checks if Turnstile is configured (has secret key)
 */
export function isTurnstileConfigured(): boolean {
  return !!process.env.TURNSTILE_SECRET_KEY;
}

/**
 * Extracts client IP from request headers (Vercel/Cloudflare compatible)
 */
export function getClientIp(headers: Headers): string | undefined {
  return (
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headers.get('x-real-ip') ||
    headers.get('cf-connecting-ip') ||
    undefined
  );
}
