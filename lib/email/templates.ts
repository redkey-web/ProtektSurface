import { QuoteFormData, getServiceTypeLabel, getUrgencyLabel } from '@/lib/validations/quote';

/**
 * Generate HTML email for business notification
 */
export function generateBusinessNotificationHtml(data: QuoteFormData): string {
  const serviceLabel = getServiceTypeLabel(data.serviceType);
  const urgencyLabel = getUrgencyLabel(data.urgency);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #1a1a1a; padding: 24px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px;">New Quote Request</h1>
            </td>
          </tr>

          <!-- Urgency Badge -->
          <tr>
            <td style="padding: 20px 24px 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display: inline-block; background-color: ${data.urgency === 'asap' ? '#dc2626' : '#2563eb'}; color: #ffffff; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: bold; text-transform: uppercase;">
                      ${urgencyLabel}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8f9fa; border-radius: 6px; padding: 20px;">
                <tr>
                  <td style="padding: 12px 20px; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase;">Customer Name</strong><br>
                    <span style="color: #1a1a1a; font-size: 16px;">${escapeHtml(data.name)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 20px; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase;">Email</strong><br>
                    <a href="mailto:${escapeHtml(data.email)}" style="color: #2563eb; font-size: 16px; text-decoration: none;">${escapeHtml(data.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 20px; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase;">Phone</strong><br>
                    <a href="tel:${escapeHtml(data.phone)}" style="color: #2563eb; font-size: 16px; text-decoration: none;">${escapeHtml(data.phone)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 20px; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase;">Service Required</strong><br>
                    <span style="color: #1a1a1a; font-size: 16px; font-weight: 600;">${escapeHtml(serviceLabel)}</span>
                  </td>
                </tr>
                ${data.propertyType ? `
                <tr>
                  <td style="padding: 12px 20px; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase;">Property/Vehicle Type</strong><br>
                    <span style="color: #1a1a1a; font-size: 16px;">${escapeHtml(data.propertyType)}</span>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 20px; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase;">Location</strong><br>
                    <span style="color: #1a1a1a; font-size: 16px;">${escapeHtml(data.address)}</span>
                  </td>
                </tr>
                ${data.message ? `
                <tr>
                  <td style="padding: 12px 20px;">
                    <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase;">Additional Details</strong><br>
                    <span style="color: #1a1a1a; font-size: 16px; white-space: pre-wrap;">${escapeHtml(data.message)}</span>
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>

          <!-- Call to Action -->
          <tr>
            <td style="padding: 0 24px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-top: 16px;">
                    <a href="tel:${escapeHtml(data.phone)}" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-right: 8px;">
                      Call Customer
                    </a>
                    <a href="mailto:${escapeHtml(data.email)}?subject=Re: Your Quote Request - Protekt Surface Solutions" style="display: inline-block; background-color: #1a1a1a; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
                      Reply by Email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 16px 24px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                This notification was sent from the Protekt Surface Solutions website quote form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generate plain text email for business notification
 */
export function generateBusinessNotificationText(data: QuoteFormData): string {
  const serviceLabel = getServiceTypeLabel(data.serviceType);
  const urgencyLabel = getUrgencyLabel(data.urgency);

  return `
NEW QUOTE REQUEST
=================

Timeframe: ${urgencyLabel}

CUSTOMER DETAILS
----------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

SERVICE DETAILS
---------------
Service: ${serviceLabel}
${data.propertyType ? `Property/Vehicle: ${data.propertyType}` : ''}
Location: ${data.address}

${data.message ? `ADDITIONAL DETAILS\n------------------\n${data.message}` : ''}

---
Reply to this email to respond directly to the customer.
  `.trim();
}

/**
 * Generate HTML email for customer confirmation
 */
export function generateCustomerConfirmationHtml(data: QuoteFormData): string {
  const serviceLabel = getServiceTypeLabel(data.serviceType);
  const urgencyLabel = getUrgencyLabel(data.urgency);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quote Request Received</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #1a1a1a; padding: 24px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px;">Protekt Surface Solutions</h1>
            </td>
          </tr>

          <!-- Success Icon -->
          <tr>
            <td style="padding: 32px 24px 16px; text-align: center;">
              <div style="display: inline-block; width: 64px; height: 64px; background-color: #22c55e; border-radius: 50%; line-height: 64px; font-size: 32px;">
                ✓
              </div>
            </td>
          </tr>

          <!-- Main Message -->
          <tr>
            <td style="padding: 0 24px 24px; text-align: center;">
              <h2 style="margin: 0 0 16px; color: #1a1a1a; font-size: 24px;">Thank You, ${escapeHtml(data.name)}!</h2>
              <p style="margin: 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                We've received your quote request for <strong>${escapeHtml(serviceLabel)}</strong>
                and will be in touch within <strong>24 hours</strong>.
              </p>
            </td>
          </tr>

          <!-- Request Summary -->
          <tr>
            <td style="padding: 0 24px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8f9fa; border-radius: 6px;">
                <tr>
                  <td style="padding: 20px;">
                    <h3 style="margin: 0 0 16px; color: #1a1a1a; font-size: 16px;">Your Request Summary</h3>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Service:</td>
                        <td style="padding: 8px 0; color: #1a1a1a; font-size: 14px; text-align: right;">${escapeHtml(serviceLabel)}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Location:</td>
                        <td style="padding: 8px 0; color: #1a1a1a; font-size: 14px; text-align: right;">${escapeHtml(data.address)}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Timeframe:</td>
                        <td style="padding: 8px 0; color: #1a1a1a; font-size: 14px; text-align: right;">${escapeHtml(urgencyLabel)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td style="padding: 0 24px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #eff6ff; border-radius: 6px; border-left: 4px solid #2563eb;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <p style="margin: 0 0 8px; color: #1e40af; font-size: 14px; font-weight: bold;">Need to reach us sooner?</p>
                    <p style="margin: 0; color: #1e40af; font-size: 14px;">
                      Call us at <a href="tel:1300000000" style="color: #1e40af; font-weight: bold;">1300 000 000</a>
                      or reply to this email.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- What's Next -->
          <tr>
            <td style="padding: 0 24px 24px;">
              <h3 style="margin: 0 0 16px; color: #1a1a1a; font-size: 16px;">What Happens Next?</h3>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 8px 0; vertical-align: top;">
                    <span style="display: inline-block; width: 24px; height: 24px; background-color: #2563eb; color: #ffffff; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold; margin-right: 12px;">1</span>
                  </td>
                  <td style="padding: 8px 0; color: #4b5563; font-size: 14px;">
                    We'll review your requirements and prepare a tailored quote
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; vertical-align: top;">
                    <span style="display: inline-block; width: 24px; height: 24px; background-color: #2563eb; color: #ffffff; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold; margin-right: 12px;">2</span>
                  </td>
                  <td style="padding: 8px 0; color: #4b5563; font-size: 14px;">
                    A team member will contact you within 24 hours
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; vertical-align: top;">
                    <span style="display: inline-block; width: 24px; height: 24px; background-color: #2563eb; color: #ffffff; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold; margin-right: 12px;">3</span>
                  </td>
                  <td style="padding: 8px 0; color: #4b5563; font-size: 14px;">
                    We'll schedule a convenient time for assessment if needed
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1a1a1a; padding: 24px; text-align: center;">
              <p style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: bold;">Protekt Surface Solutions</p>
              <p style="margin: 0; color: #9ca3af; font-size: 14px;">
                Professional Window Tinting & Surface Protection
              </p>
            </td>
          </tr>
        </table>

        <!-- Unsubscribe -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0">
          <tr>
            <td style="padding: 16px; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                This is a transactional email confirming your quote request.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generate plain text email for customer confirmation
 */
export function generateCustomerConfirmationText(data: QuoteFormData): string {
  const serviceLabel = getServiceTypeLabel(data.serviceType);
  const urgencyLabel = getUrgencyLabel(data.urgency);

  return `
PROTEKT SURFACE SOLUTIONS
=========================

Thank You, ${data.name}!

We've received your quote request for ${serviceLabel} and will be in touch within 24 hours.

YOUR REQUEST SUMMARY
--------------------
Service: ${serviceLabel}
Location: ${data.address}
Timeframe: ${urgencyLabel}

NEED TO REACH US SOONER?
------------------------
Call us at: 1300 000 000
Or reply to this email.

WHAT HAPPENS NEXT?
------------------
1. We'll review your requirements and prepare a tailored quote
2. A team member will contact you within 24 hours
3. We'll schedule a convenient time for assessment if needed

---
Protekt Surface Solutions
Professional Window Tinting & Surface Protection
  `.trim();
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}
