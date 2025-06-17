# Security Guide

## Environment Variables Setup

This project uses environment variables to keep sensitive information secure. Never commit API keys, client IDs, or other secrets to version control.

### Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Google OAuth Configuration
REACT_APP_GOOGLE_CLIENT_ID=your_google_oauth_client_id_here.apps.googleusercontent.com

# Google Sheets API Configuration
REACT_APP_GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key_here
```

### How to Set Up Environment Variables

1. **Copy the example file:**
   ```bash
   cp env.example .env.local
   ```

2. **Edit `.env.local` and add your actual values:**
   ```bash
   REACT_APP_GOOGLE_CLIENT_ID=your_google_oauth_client_id_here.apps.googleusercontent.com
   REACT_APP_GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key_here
   ```

3. **Restart your development server** after adding environment variables.

### Important Security Notes

- ✅ **DO** use `.env.local` for local development
- ✅ **DO** add environment variables to your deployment platform (Netlify, Vercel, etc.)
- ✅ **DO** use different API keys for development and production
- ❌ **NEVER** commit `.env.local` to version control
- ❌ **NEVER** share API keys in public repositories
- ❌ **NEVER** hardcode secrets in your source code

### Deployment Setup

#### Netlify
1. Go to your site settings in Netlify
2. Navigate to "Environment variables"
3. Add each variable with the same names as in `.env.local`

#### Vercel
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add each variable with the same names as in `.env.local`

#### Other Platforms
Most deployment platforms have similar environment variable configuration in their settings.

### What's Been Secured

The following sensitive information has been moved to environment variables:

1. **Google OAuth Client ID** - Used for Google authentication
2. **Google Sheets API Key** - Used for fetching data from Google Sheets

### Fallback Behavior

If environment variables are not set:
- The app will show console warnings
- Google OAuth will not work
- Google Sheets functionality will use fallback data
- The app will still function but with limited features

### Monitoring

Check your browser's console for warnings about missing environment variables during development. 