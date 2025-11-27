# Twilio Setup Guide

**Project**: ProtektSurface
**Purpose**: Step-by-step guide to set up Twilio for email and SMS

---

## Prerequisites

- [ ] Business email address
- [ ] Business phone number (for verification)
- [ ] Domain access (for email verification)
- [ ] Vercel project access (for environment variables)

---

## Part 1: Create Twilio Account

### Step 1: Sign Up

1. Go to [twilio.com/try-twilio](https://www.twilio.com/try-twilio)
2. Enter your details:
   - Email address (business email recommended)
   - Password
   - First name, last name
3. Verify your email address
4. Verify your phone number (SMS code)

### Step 2: Complete Identity Verification

**Required for Australian numbers and sending SMS:**

1. Go to Console → Settings → [General](https://console.twilio.com/us1/account/manage-account/general-settings)
2. Click "Complete Identity Verification"
3. Provide:
   - Business name: "Protekt Surface Solutions"
   - Business type: Small Business
   - Address: Your business address
   - ID verification (driver's license or passport)
4. Wait for approval (usually within 24 hours)

### Step 3: Note Your Account Credentials

1. Go to [Console Dashboard](https://console.twilio.com)
2. Find and save:
   ```
   Account SID: ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   Auth Token: [Click to reveal] xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
3. **Keep these secret!** Never commit to git.

---

## Part 2: Enable SendGrid (Email)

### Step 1: Access SendGrid

**Option A: Through Twilio Console**
1. Go to [Twilio Console](https://console.twilio.com)
2. Navigate to Messaging → Email (SendGrid)
3. Click "Get Started" or "Enable SendGrid"

**Option B: Direct SendGrid Signup**
1. Go to [sendgrid.com](https://sendgrid.com)
2. Sign up with the same email as Twilio
3. Accounts will be linked under Twilio billing

### Step 2: Create API Key

1. Go to SendGrid → Settings → [API Keys](https://app.sendgrid.com/settings/api_keys)
2. Click "Create API Key"
3. Name: `protektsurface-production`
4. Permissions: "Full Access" (or "Restricted Access" with Mail Send only)
5. Click "Create & View"
6. **Copy the key immediately!** It won't be shown again.
   ```
   SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### Step 3: Verify Sending Domain

**This is critical for email deliverability!**

1. Go to SendGrid → Settings → [Sender Authentication](https://app.sendgrid.com/settings/sender_auth)
2. Click "Authenticate Your Domain"
3. Enter your domain: `protektsurface.com.au`
4. SendGrid will provide DNS records to add

### Step 4: Add DNS Records

Add these records at your domain registrar (or Vercel if domain is there):

**CNAME Records (for DKIM):**
```
Type: CNAME
Name: s1._domainkey.protektsurface.com.au
Value: s1.domainkey.u12345.wl.sendgrid.net

Type: CNAME
Name: s2._domainkey.protektsurface.com.au
Value: s2.domainkey.u12345.wl.sendgrid.net
```

**CNAME Record (for link tracking):**
```
Type: CNAME
Name: em1234.protektsurface.com.au
Value: u12345.wl.sendgrid.net
```

**TXT Record (for SPF) - if not already present:**
```
Type: TXT
Name: protektsurface.com.au
Value: v=spf1 include:sendgrid.net ~all
```

### Step 5: Verify Domain

1. After adding DNS records, wait 5-10 minutes
2. Go back to SendGrid → Sender Authentication
3. Click "Verify" next to your domain
4. All checks should show green ✓

### Step 6: Create Sender Identity

1. Go to SendGrid → Settings → [Sender Authentication](https://app.sendgrid.com/settings/sender_auth)
2. Click "Verify Single Sender" (if domain not verified yet) OR
3. With verified domain, you can send from any address @protektsurface.com.au

**Recommended sender addresses:**
```
quotes@protektsurface.com.au    - For quote notifications
noreply@protektsurface.com.au   - For automated emails
info@protektsurface.com.au      - For general emails
```

---

## Part 3: Enable SMS (Phase 2)

### Step 1: Purchase Australian Phone Number

1. Go to Twilio Console → Phone Numbers → [Buy a Number](https://console.twilio.com/us1/develop/phone-numbers/manage/search)
2. Search settings:
   - Country: Australia
   - Capabilities: SMS ✓
   - Type: Mobile (recommended for SMS)
3. Select a number and click "Buy"
4. Cost: ~$6 AUD/month

**Note:** Australian regulations require mobile numbers for A2P (Application-to-Person) SMS.

### Step 2: Configure Messaging Service (Optional but Recommended)

1. Go to Messaging → Services → [Create Messaging Service](https://console.twilio.com/us1/develop/sms/services)
2. Name: "ProtektSurface SMS"
3. Select use case: "Notifications"
4. Add your phone number to the sender pool
5. Save the Messaging Service SID

### Step 3: Australian Compliance

For sending SMS to Australian numbers:

1. **Register for A2P**: May be required for business SMS
2. **Content guidelines**:
   - Include business name
   - Provide opt-out option for marketing
   - Keep transactional (quote confirmations are fine)

---

## Part 4: Environment Variables

### Local Development (.env.local)

Create or update `.env.local` in your project root:

```env
# ===========================================
# TWILIO / SENDGRID CONFIGURATION
# ===========================================

# SendGrid (Email) - Phase 1
SENDGRID_API_KEY=SG.your_api_key_here
FROM_EMAIL=quotes@protektsurface.com.au
BUSINESS_EMAIL=info@protektsurface.com.au

# Twilio (SMS) - Phase 2
TWILIO_ACCOUNT_SID=ACyour_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+614xxxxxxxx
```

### Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable:

| Name | Value | Environment |
|------|-------|-------------|
| `SENDGRID_API_KEY` | SG.xxx... | Production, Preview |
| `FROM_EMAIL` | quotes@protektsurface.com.au | Production, Preview |
| `BUSINESS_EMAIL` | info@protektsurface.com.au | Production, Preview |
| `TWILIO_ACCOUNT_SID` | ACxxx... | Production, Preview |
| `TWILIO_AUTH_TOKEN` | xxx... | Production, Preview |
| `TWILIO_PHONE_NUMBER` | +614xxxxxxxx | Production, Preview |

**Important:**
- Mark sensitive values (API keys, tokens) as "Sensitive"
- Use different values for Preview if testing

---

## Part 5: Testing

### Test SendGrid Locally

1. Install the package:
   ```bash
   npm install @sendgrid/mail
   ```

2. Create a test script `scripts/test-email.ts`:
   ```typescript
   import sgMail from '@sendgrid/mail';

   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

   async function testEmail() {
     try {
       await sgMail.send({
         to: 'your-test-email@example.com',
         from: process.env.FROM_EMAIL!,
         subject: 'Test Email from ProtektSurface',
         text: 'If you receive this, SendGrid is working!',
         html: '<p>If you receive this, <strong>SendGrid is working!</strong></p>',
       });
       console.log('✅ Email sent successfully!');
     } catch (error) {
       console.error('❌ Email failed:', error);
     }
   }

   testEmail();
   ```

3. Run the test:
   ```bash
   npx tsx scripts/test-email.ts
   ```

### Test Twilio SMS Locally

1. Install the package:
   ```bash
   npm install twilio
   ```

2. Create a test script `scripts/test-sms.ts`:
   ```typescript
   import twilio from 'twilio';

   const client = twilio(
     process.env.TWILIO_ACCOUNT_SID!,
     process.env.TWILIO_AUTH_TOKEN!
   );

   async function testSMS() {
     try {
       const message = await client.messages.create({
         body: 'Test SMS from ProtektSurface!',
         from: process.env.TWILIO_PHONE_NUMBER!,
         to: '+614xxxxxxxx', // Your test number
       });
       console.log('✅ SMS sent! SID:', message.sid);
     } catch (error) {
       console.error('❌ SMS failed:', error);
     }
   }

   testSMS();
   ```

3. Run the test:
   ```bash
   npx tsx scripts/test-sms.ts
   ```

### Using Test Credentials (Free Testing)

Twilio provides test credentials that don't send real messages:

```env
# Test credentials (don't actually send)
TWILIO_ACCOUNT_SID=ACtest_xxxxx
TWILIO_AUTH_TOKEN=test_xxxxx
TWILIO_PHONE_NUMBER=+15005550006
```

**Test phone numbers:**
- `+15005550006` - Valid test number (simulates success)
- `+15005550001` - Invalid number (simulates failure)

---

## Part 6: Troubleshooting

### Email Not Sending

| Issue | Solution |
|-------|----------|
| "Unauthorized" error | Check API key is correct and has Mail Send permission |
| "Forbidden" error | Verify sender identity or domain |
| Email goes to spam | Complete domain authentication (DKIM, SPF) |
| No error but no email | Check spam folder, verify recipient address |

### SMS Not Sending

| Issue | Solution |
|-------|----------|
| "Unverified number" | Complete identity verification in Twilio |
| "Invalid To number" | Ensure +61 format for Australian numbers |
| "Geographic permission" | Enable Australia in Geographic Permissions |
| Message queued but not delivered | Check Twilio Console → Monitor → Logs |

### Common Mistakes

1. **Forgetting to verify domain** → Emails go to spam
2. **Wrong phone format** → Use +614xxxxxxxx, not 04xxxxxxxx
3. **Exposing API keys** → Never commit .env files to git
4. **Not enabling Australia** → Go to Console → Geo Permissions

---

## Part 7: Monitoring

### SendGrid Dashboard

- [Activity Feed](https://app.sendgrid.com/email_activity) - See all sent emails
- [Statistics](https://app.sendgrid.com/statistics) - Delivery rates, opens, clicks
- [Suppressions](https://app.sendgrid.com/suppressions) - Bounces, spam reports

### Twilio Console

- [Monitor → Logs → Messaging](https://console.twilio.com/us1/monitor/logs/sms) - SMS delivery logs
- [Monitor → Alerts](https://console.twilio.com/us1/monitor/alerts) - Error alerts
- [Usage](https://console.twilio.com/us1/billing/manage-billing/usage) - Cost tracking

---

## Quick Reference

### API Endpoints

**SendGrid:**
- Base URL: `https://api.sendgrid.com`
- Send email: `POST /v3/mail/send`
- [API Docs](https://docs.sendgrid.com/api-reference/mail-send/mail-send)

**Twilio:**
- Base URL: `https://api.twilio.com`
- Send SMS: `POST /2010-04-01/Accounts/{AccountSid}/Messages.json`
- [API Docs](https://www.twilio.com/docs/sms/api/message-resource)

### Support Links

- [SendGrid Documentation](https://docs.sendgrid.com/)
- [Twilio Documentation](https://www.twilio.com/docs)
- [SendGrid Support](https://support.sendgrid.com/)
- [Twilio Support](https://support.twilio.com/)

---

## Checklist Summary

### Phase 1 (Email)
- [ ] Create Twilio account
- [ ] Enable SendGrid
- [ ] Create API key
- [ ] Verify domain (DNS records)
- [ ] Add environment variables to Vercel
- [ ] Test email sending
- [ ] Deploy and verify

### Phase 2 (SMS)
- [ ] Complete identity verification
- [ ] Purchase Australian phone number
- [ ] Configure messaging service
- [ ] Add SMS environment variables
- [ ] Test SMS sending
- [ ] Deploy and verify

---

**Document Version**: 1.0
**Last Updated**: November 27, 2025
