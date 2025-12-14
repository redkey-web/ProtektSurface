import { z } from 'zod';

/**
 * Quote form validation schema
 * Simplified: Name, Phone, E-mail, Message
 */
export const quoteFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  phone: z.string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long'),
  email: z.string()
    .email('Please enter a valid email address')
    .max(254, 'Email is too long'),
  message: z.string()
    .max(2000, 'Message is too long')
    .optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
