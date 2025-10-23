# EmailJS Setup Instructions

This guide will help you set up EmailJS to enable contact form functionality on your portfolio.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** as your email service
4. Follow the setup instructions to connect your Gmail account (`tharunpoongavanam@gmail.com`)
5. Note down your **Service ID** (starts with `service_`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Message from {{from_name}} - Portfolio Contact

Hello Tharun,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

4. Save the template and note down your **Template ID** (starts with `template_`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `Portfolio/lib/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'service_YOUR_ACTUAL_SERVICE_ID',
  templateId: 'template_YOUR_ACTUAL_TEMPLATE_ID',
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY',
};
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to your portfolio contact section
3. Fill out and submit the contact form
4. Check your Gmail inbox for the message

## Troubleshooting

- Make sure all credentials are correct
- Check that your Gmail account is properly connected
- Verify that the email template uses the correct variable names
- Check the browser console for any error messages

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production deployment
- The public key is safe to use in client-side code
