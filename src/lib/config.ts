export const SITE_URL = 'https://pshotnearme.com';
export const SITE_NAME = 'PShotNearMe.com';

/**
 * WhatsApp business number in international format (no + prefix).
 * Replace with the actual business number before deployment.
 * Can be overridden via NEXT_PUBLIC_WHATSAPP_NUMBER environment variable.
 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '447700000000';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  'Hi, I would like a free consultation about the P-Shot treatment.';
