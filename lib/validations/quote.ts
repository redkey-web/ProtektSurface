import { z } from 'zod';

/**
 * Quote form validation schema
 * Shared between frontend (QuoteRequestForm) and backend (API route)
 */
export const quoteFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z.string()
    .email('Please enter a valid email address')
    .max(254, 'Email is too long'),
  phone: z.string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long'),
  serviceType: z.string()
    .min(1, 'Please select a service type'),
  propertyType: z.string().optional(),
  address: z.string()
    .min(5, 'Please enter your address')
    .max(500, 'Address is too long'),
  urgency: z.string()
    .min(1, 'Please select a timeframe'),
  message: z.string()
    .max(2000, 'Message is too long')
    .optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

/**
 * Service type labels for display
 */
export const serviceTypeLabels: Record<string, string> = {
  residential: 'Residential Window Tinting',
  commercial: 'Commercial Window Tinting',
  automotive: 'Automotive Window Tinting',
  ceramic: 'Ceramic Window Tint',
  frosted: 'Frosted & Decorative Film',
  marble: 'Marble & Stone Protection Film',
};

/**
 * Urgency labels for display
 */
export const urgencyLabels: Record<string, string> = {
  asap: 'As soon as possible',
  week: 'Within a week',
  month: 'Within a month',
  flexible: 'Flexible',
};

/**
 * Get human-readable service type
 */
export function getServiceTypeLabel(value: string): string {
  return serviceTypeLabels[value] || value;
}

/**
 * Get human-readable urgency
 */
export function getUrgencyLabel(value: string): string {
  return urgencyLabels[value] || value;
}
