export { sendEmail, isEmailConfigured } from './sendgrid';
export type { EmailOptions, SendEmailResult } from './sendgrid';
export {
  generateBusinessNotificationHtml,
  generateBusinessNotificationText,
  generateCustomerConfirmationHtml,
  generateCustomerConfirmationText,
} from './templates';
