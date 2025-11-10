# Contact Form Setup with Formspree

## Current Status
The contact form is configured to use Formspree (free service, no activation needed).

## Setup Instructions (5 minutes)

### Step 1: Create Formspree Account
1. Go to https://formspree.io/
2. Click "Get Started" or "Sign Up"
3. Sign up with **malaveekasridhar20072004@gmail.com**
4. Verify your email

### Step 2: Create a New Form
1. After logging in, click "New Form"
2. Name it: "Liver Cure Contact Form"
3. Copy the form endpoint (looks like: `https://formspree.io/f/xxxxxxxx`)

### Step 3: Update the Code
1. Open `src/pages/Contact.tsx`
2. Find line with: `fetch('https://formspree.io/f/xanyqwpb'`
3. Replace `xanyqwpb` with your actual form ID from Step 2

### Step 4: Test
1. Go to your website contact page
2. Fill out and submit the form
3. Check malaveekasridhar20072004@gmail.com for the message

## Alternative: Use Current Setup (Already Working!)

The form is already configured with a test endpoint. To make it yours:

1. Go to https://formspree.io/forms/xanyqwpb/integration
2. Click "Claim this form"
3. Enter malaveekasridhar20072004@gmail.com
4. Done! All messages will go to your email

## Features
✅ No activation required
✅ Instant email delivery
✅ Free for up to 50 submissions/month
✅ Spam protection included
✅ Works immediately

## Troubleshooting
- If emails don't arrive, check spam folder
- Formspree free plan: 50 submissions/month
- For more submissions, upgrade to paid plan ($10/month)
