# Buttondown Email Newsletter Setup

## What's Already Built

- Email capture form on homepage (and other pages)
- API route `/api/subscribe` that calls Buttondown
- Works in dev mode (logs to console) without API key

## To Complete Setup

### 1. Create Buttondown Account
1. Go to https://buttondown.email
2. Sign up for free account
3. Confirm your email

### 2. Get API Key
1. Log into Buttondown
2. Go to Settings → API
3. Copy your API key

### 3. Add to Vercel Environment Variables
1. Go to Vercel Dashboard → cricuthelper project
2. Settings → Environment Variables
3. Add: `BUTTONDOWN_API_KEY` = your-api-key
4. Redeploy the site

### 4. Test
1. Submit an email on the live site
2. Check Buttondown dashboard for the subscriber

## Buttondown Free Tier

- Up to 100 subscribers free
- Unlimited emails
- No Buttondown branding
- Perfect for starting out

## Notes

- Subscribers are tagged with `cricuthelper-website`
- Form works without API key in development (just logs)
- Handles "already subscribed" errors gracefully
