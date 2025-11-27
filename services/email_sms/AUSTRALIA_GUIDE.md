# Twilio Services in Australia

**Project**: ProtektSurface
**Created**: November 27, 2025
**Purpose**: Australia-specific Twilio capabilities, regulations, and pricing

---

## Quick Reference

| Service | Available in AU | Monthly Cost | Per-Use Cost |
|---------|-----------------|--------------|--------------|
| **SMS (Mobile Numbers)** | ✅ Yes | $6.50/number | $0.0515/message |
| **SMS (Alphanumeric ID)** | ✅ Yes (pre-registered) | Free | $0.0515/message |
| **MMS** | ✅ Yes | Included | $0.35/message |
| **WhatsApp** | ✅ Yes | Free | $0.005/message + Meta fees |
| **Voice (Outbound)** | ✅ Yes | $6.50/number | $0.075/min (mobile) |
| **Voice (Inbound)** | ✅ Yes | $6.50/number | $0.01/min |
| **Short Codes** | ❌ No | N/A | N/A |

---

## Australian SMS Regulations

### ACMA & Spam Act 2003

Australia has strict regulations for commercial messaging. You **MUST** comply with:

#### 1. Consent (Permission)
```
✅ REQUIRED: Explicit opt-in consent before sending ANY commercial message
✅ REQUIRED: Record of when and how consent was obtained
❌ PROHIBITED: Sending to purchased lists without consent
❌ PROHIBITED: Pre-ticked consent boxes
```

#### 2. Identification
```
✅ REQUIRED: Your business name in every message
✅ REQUIRED: Contact details (phone or email)
✅ REQUIRED: ABN if registered business
```

#### 3. Unsubscribe
```
✅ REQUIRED: Clear opt-out mechanism in EVERY message
✅ REQUIRED: Process opt-outs within 5 business days
✅ REQUIRED: Free or low-cost opt-out method
✅ REQUIRED: Honor opt-outs permanently
```

### Penalties for Non-Compliance

| Violation | Penalty |
|-----------|---------|
| Sending without consent | Up to $2.2 million per day |
| No unsubscribe option | Up to $2.2 million per day |
| Ignoring opt-outs | Up to $2.2 million per day |

**Reference**: [ACMA Spam Obligations](https://www.acma.gov.au/theACMA/spam-industry-obligations)

---

## SMS in Australia

### Sender ID Options

#### Option 1: Australian Mobile Number (Recommended for 2-Way)

**Best for**: Quote follow-ups where customers might reply

| Aspect | Details |
|--------|---------|
| Format | `+614XXXXXXXX` (10 digits) |
| Cost | $6.50 AUD/month |
| Outbound | $0.0515/message |
| Inbound | $0.0075/message |
| 2-Way | ✅ Yes - customers can reply |
| MMS | ✅ Supported |

**Example sender**: `+61412345678`

```
From: +61412345678
Hi John! Thanks for your quote request with Protekt Surface Solutions.
We'll call you within 24 hours. Questions? Reply here or call 1300 XXX XXX.
Reply STOP to unsubscribe.
```

#### Option 2: Alphanumeric Sender ID (One-Way Only)

**Best for**: Professional notifications where replies aren't needed

| Aspect | Details |
|--------|---------|
| Format | Up to 11 characters (letters/numbers) |
| Cost | Free |
| Outbound | $0.0515/message |
| Inbound | ❌ Not possible (one-way only) |
| 2-Way | ❌ No - customers cannot reply |
| MMS | ❌ Not supported |

**Example sender**: `ProtektSurf` or `PSS`

```
From: ProtektSurf
Hi John! Thanks for your quote request with Protekt Surface Solutions.
We'll call you within 24 hours. Call 1300 XXX XXX for questions.
Reply STOP to 0412XXXXXX to unsubscribe.
```

**⚠️ IMPORTANT: Alphanumeric Sender ID Registration Required**

As of April 25, 2023, all alphanumeric sender IDs in Australia must be pre-registered:

1. Go to [Twilio Console - Sender ID Registration](https://console.twilio.com/us1/develop/phone-numbers/sender-ids/applications/create)
2. Submit your business details and use case
3. Wait 5 business days for approval
4. Only then can you send messages

**Unregistered alphanumeric IDs will be blocked.**

---

### SMS Pricing Summary (Australia)

| Volume/Month | Price per SMS |
|--------------|---------------|
| 1 - 20,000 | $0.0515 |
| 20,001 - 75,000 | $0.0505 |
| 75,001 - 150,000 | $0.0484 |
| 150,001+ | $0.0474 |

**Cost Example for ProtektSurface**:
```
Estimated monthly leads: 50
SMS per lead: 2 (confirmation + follow-up)
Total SMS: 100/month

Phone number: $6.50
SMS cost: 100 × $0.0515 = $5.15

Monthly total: ~$12 AUD
```

---

### MMS in Australia

MMS is supported but significantly more expensive:

| Message Type | Cost |
|--------------|------|
| SMS | $0.0515 |
| MMS | $0.35 |

**When to use MMS**:
- Sending photos of completed work
- Sharing quote PDFs
- Before/after comparisons

**Note**: Most business notifications don't need MMS. Use SMS for text-only messages.

---

### Character Limits & Segments

SMS messages are charged **per segment**:

| Encoding | Characters per Segment |
|----------|----------------------|
| GSM 3.38 (standard) | 160 characters |
| Unicode (emojis, etc.) | 70 characters |

**Concatenated messages** (longer than one segment):

| Encoding | Segment 1 | Segment 2+ |
|----------|-----------|------------|
| GSM 3.38 | 160 chars | 153 chars each |
| Unicode | 70 chars | 67 chars each |

**Cost implication**:
```
Message: "Hi John! Thanks for your quote request..." (200 characters)
= 2 segments × $0.0515 = $0.103 per message
```

**Recommendation**: Keep messages under 160 characters to minimize costs.

---

## Content Restrictions in Australia

### Prohibited Content

These message types are **NOT ALLOWED** via Twilio in Australia:

| Category | Allowed? |
|----------|----------|
| Gambling/Betting | ❌ Prohibited |
| Firearms | ❌ Prohibited |
| Cannabis | ❌ Prohibited |
| Adult content | ❌ Prohibited |
| Phishing/Fraud | ❌ Prohibited |

### ProtektSurface Compliance

Window tinting services are fully compliant. No restrictions apply to:
- Quote confirmations
- Appointment reminders
- Service follow-ups
- Review requests

---

## WhatsApp Business in Australia

### Availability

WhatsApp Business API is available in Australia via Twilio.

### Pricing

| Component | Cost |
|-----------|------|
| Twilio fee | $0.005/message |
| Meta utility template | $0.004/message |
| Meta marketing template | $0 (no Meta fee) |
| Meta authentication | $0.004/message |
| Free-form (24hr window) | $0 (only Twilio fee) |

**Total cost per message**: ~$0.005 - $0.009

### Comparison: SMS vs WhatsApp

| Feature | SMS | WhatsApp |
|---------|-----|----------|
| Cost per message | $0.0515 | ~$0.005-0.009 |
| Open rate | 98% | 98% |
| Rich media | MMS ($0.35) | Included |
| Buttons | ❌ | ✅ |
| Read receipts | ❌ | ✅ |
| 2-way chat | ✅ | ✅ |
| Setup complexity | Low | High |
| Customer reach | 100% | ~60% (app required) |

### WhatsApp Setup Requirements

1. **Meta Business Verification** - Verify your business with Meta
2. **WhatsApp Business Account** - Create via Facebook Business Manager
3. **Phone Number** - Dedicate a number to WhatsApp (can't use for SMS)
4. **Message Templates** - Pre-approve templates for outbound messages

**Recommendation for ProtektSurface**: Start with SMS. Add WhatsApp later when:
- Volume justifies setup effort
- Customers request it
- You want richer messaging (images, buttons)

---

## Voice Calling in Australia

### Pricing

| Call Type | Cost |
|-----------|------|
| Outbound to AU mobile | $0.075/min |
| Outbound to AU landline | $0.0252/min |
| Inbound (any) | $0.01/min |
| Phone number (mobile) | $6.50/month |

### Use Cases for ProtektSurface

**Automated Voice Alerts** (Phase 5):
```
Urgent lead comes in → Trigger voice call to business owner
"You have a new urgent quote request from John Smith
for commercial window tinting. Press 1 to hear details,
Press 2 to call them now."
```

**Cost Example**:
```
Alert call: 30 seconds = $0.0375
Monthly (10 alerts): ~$0.38
```

---

## Recommended Setup for ProtektSurface

### Phase 2: SMS Follow-up

**Recommended Configuration**:

| Setting | Value |
|---------|-------|
| Number Type | Australian Mobile |
| Number Format | +614XXXXXXXX |
| Sender Display | Phone number (allows replies) |
| Monthly Cost | $6.50 |

**Message Template**:
```
Hi {name}! Thanks for your quote request with Protekt Surface Solutions.
We'll call you within 24 hours. Questions? Reply here or call 1300 XXX XXX.
Reply STOP to unsubscribe.
```

**Character count**: ~155 (1 segment = $0.0515)

### Environment Variables

```env
# Twilio (Phase 2)
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=+614XXXXXXXX
```

### Code Example (Australia)

```typescript
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

interface SendSmsResult {
  success: boolean;
  messageSid?: string;
  error?: string;
}

export async function sendSmsAustralia(
  to: string,
  body: string
): Promise<SendSmsResult> {
  // Validate Australian mobile number
  const auMobileRegex = /^(\+?61|0)4\d{8}$/;
  if (!auMobileRegex.test(to)) {
    return { success: false, error: 'Invalid Australian mobile number' };
  }

  // Normalize to E.164 format
  const normalizedTo = to.startsWith('+61')
    ? to
    : to.startsWith('0')
    ? `+61${to.slice(1)}`
    : `+61${to}`;

  try {
    const message = await client.messages.create({
      body,
      to: normalizedTo,
      from: process.env.TWILIO_PHONE_NUMBER,
    });

    return { success: true, messageSid: message.sid };
  } catch (error) {
    console.error('SMS send error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Usage
const result = await sendSmsAustralia(
  '0412345678',
  'Hi John! Thanks for your quote request. We\'ll call within 24 hours. Reply STOP to unsubscribe.'
);
```

---

## Phone Number Validation (Australia)

Australian mobile numbers must match these patterns:

| Format | Example | Valid |
|--------|---------|-------|
| Local | 0412 345 678 | ✅ |
| Local (no spaces) | 0412345678 | ✅ |
| International | +61412345678 | ✅ |
| International (spaces) | +61 412 345 678 | ✅ |
| Missing leading 0 | 412345678 | ⚠️ (fixable) |
| Landline | 02 9876 5432 | ❌ (not mobile) |

### Validation Function

```typescript
interface PhoneValidation {
  valid: boolean;
  normalized: string | null;
  error?: string;
}

export function validateAustralianMobile(phone: string): PhoneValidation {
  // Remove all whitespace and dashes
  const cleaned = phone.replace(/[\s\-()]/g, '');

  // Australian mobile patterns
  const patterns = [
    /^\+614\d{8}$/,      // +61412345678
    /^614\d{8}$/,        // 61412345678
    /^04\d{8}$/,         // 0412345678
    /^4\d{8}$/,          // 412345678 (missing leading 0)
  ];

  for (const pattern of patterns) {
    if (pattern.test(cleaned)) {
      // Normalize to E.164
      let normalized: string;
      if (cleaned.startsWith('+61')) {
        normalized = cleaned;
      } else if (cleaned.startsWith('61')) {
        normalized = `+${cleaned}`;
      } else if (cleaned.startsWith('0')) {
        normalized = `+61${cleaned.slice(1)}`;
      } else {
        normalized = `+61${cleaned}`;
      }

      return { valid: true, normalized };
    }
  }

  return {
    valid: false,
    normalized: null,
    error: 'Please enter a valid Australian mobile number (04XX XXX XXX)',
  };
}
```

---

## Compliance Checklist for ProtektSurface

Before launching SMS:

### Legal Requirements
- [ ] Privacy Policy updated to mention SMS communications
- [ ] Terms include SMS consent clause
- [ ] Record of consent mechanism documented

### Form Updates
- [ ] Checkbox: "I agree to receive SMS updates about my quote"
- [ ] Link to privacy policy near checkbox
- [ ] Checkbox NOT pre-ticked

### Message Requirements
- [ ] Business name in every SMS
- [ ] STOP instruction in every SMS
- [ ] Contact details included
- [ ] Messages under 160 characters (cost control)

### Technical Setup
- [ ] Opt-out handling (STOP keyword)
- [ ] Opt-out storage (never message again)
- [ ] Phone validation before sending
- [ ] Send logging for compliance records

---

## Cost Comparison: Full Implementation

### Monthly Costs (Estimated 50 leads/month)

| Service | Calculation | Monthly Cost |
|---------|-------------|--------------|
| **SendGrid Email** | 100 emails × $0 (free tier) | $0 |
| **Twilio SMS** | Phone ($6.50) + 100 SMS ($5.15) | $11.65 |
| **Cloudflare Turnstile** | Unlimited × $0 | $0 |
| **Total** | | **~$12 AUD** |

### Scaling Costs

| Leads/Month | Email | SMS | Total |
|-------------|-------|-----|-------|
| 50 | $0 | $11.65 | $11.65 |
| 100 | $0 | $16.80 | $16.80 |
| 200 | $0 | $27.10 | $27.10 |
| 500 | $0 | $58.00 | $58.00 |

---

## Feature Availability Summary

| Feature | Phase | Available in AU | Notes |
|---------|-------|-----------------|-------|
| Email (SendGrid) | 1 | ✅ | Active now |
| SMS Follow-up | 2 | ✅ | Ready to implement |
| MMS | 2 | ✅ | Higher cost ($0.35) |
| Alphanumeric Sender | 2 | ✅ | Requires pre-registration |
| Short Codes | 2 | ❌ | Not supported in AU |
| WhatsApp | 5 | ✅ | Requires Meta verification |
| Voice Alerts | 5 | ✅ | $0.075/min to mobile |
| 2-Way SMS | 5 | ✅ | Use mobile number |

---

## Troubleshooting

### "Message not delivered"

1. Check phone number format (must be valid AU mobile)
2. Verify Twilio account has funds
3. Check if number is on Do Not Call registry
4. Verify content doesn't violate guidelines

### "Invalid sender ID"

1. For alphanumeric IDs: Check registration status
2. For phone numbers: Verify number is active in Twilio
3. Ensure FROM number matches your Twilio account

### "Rate limit exceeded"

Twilio has default rate limits:
- 1 message/second per phone number
- Can be increased via support request

---

## Resources

- [Twilio AU SMS Guidelines](https://www.twilio.com/en-us/guidelines/au/sms)
- [Twilio AU SMS Pricing](https://www.twilio.com/en-us/sms/pricing/au)
- [ACMA Spam Obligations](https://www.acma.gov.au/theACMA/spam-industry-obligations)
- [Twilio Console](https://console.twilio.com)
- [Sender ID Registration](https://console.twilio.com/us1/develop/phone-numbers/sender-ids/applications/create)

---

**Document Version**: 1.0
**Last Updated**: November 27, 2025
