# Google OAuth Setup Guide

This guide will help you set up Google OAuth for user authentication in your TDK website.

## Prerequisites

- A Google Cloud Console account
- Access to the Google Cloud Console

## Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Click on "Select a project" at the top of the page
3. Click "New Project"
4. Enter a project name (e.g., "TDK Website")
5. Click "Create"

## Step 2: Enable the Google+ API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google+ API" or "Google Identity Services"
3. Click on "Google Identity Services API"
4. Click "Enable"

## Step 3: Configure OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen"
2. Choose "External" user type
3. Fill in the required information:
   - App name: "TDK Technology Solutions"
   - User support email: Your email address
   - Developer contact information: Your email address
4. Add scopes:
   - `openid`
   - `email`
   - `profile`
5. Add test users (optional for development)
6. Click "Save and Continue"

## Step 4: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Choose "Web application" as the application type
4. Name: "TDK Website"
5. Add authorized JavaScript origins:
   - `http://localhost:3000` (for development)
   - `https://yourdomain.com` (for production)
6. Add authorized redirect URIs:
   - `http://localhost:3000` (for development)
   - `https://yourdomain.com` (for production)
7. Click "Create"

## Step 5: Get Your Client ID

After creating the credentials, you'll see a popup with your Client ID. Copy this ID.

## Step 6: Update Your Application

1. Open `src/App.tsx`
2. Replace `YOUR_GOOGLE_CLIENT_ID_HERE` with your actual Client ID:

```typescript
const GOOGLE_CLIENT_ID = "your-actual-client-id-here.apps.googleusercontent.com";
```

## Step 7: Test the Integration

1. Start your development server: `npm start`
2. Navigate to your website
3. Click the Google login button in the header
4. You should see the Google OAuth popup
5. After successful login, you should see your profile picture and name in the header
6. Try downloading an asset from the Resources page - it should now work for authenticated users

## Features Implemented

### Authentication Features
- ✅ Google OAuth login integration
- ✅ User profile display with avatar and name
- ✅ Persistent login state (saved in localStorage)
- ✅ Logout functionality
- ✅ Token expiration handling

### Protected Downloads
- ✅ Download protection for Resources page
- ✅ Login modal for unauthenticated users
- ✅ Download tracking (console logs)
- ✅ Success/error messages

### UI/UX Features
- ✅ Responsive design
- ✅ Theme-aware styling (dark/light mode)
- ✅ Localization support (English/Vietnamese)
- ✅ Smooth animations and transitions
- ✅ User-friendly error messages

## Security Considerations

1. **Client-Side Only**: This implementation is client-side only. For production use, consider:
   - Server-side token validation
   - User session management
   - Rate limiting for downloads
   - Analytics tracking

2. **Token Storage**: Tokens are stored in localStorage. Consider:
   - Using httpOnly cookies for better security
   - Implementing token refresh logic
   - Adding CSRF protection

3. **Download Protection**: Current implementation provides basic protection. Consider:
   - Server-side download validation
   - Download limits per user
   - File access logging

## Troubleshooting

### Common Issues

1. **"Invalid Client ID" Error**
   - Ensure your Client ID is correct
   - Check that your domain is added to authorized origins
   - Verify the API is enabled

2. **"Redirect URI Mismatch" Error**
   - Add your exact domain to authorized redirect URIs
   - Include both http and https versions for development

3. **Login Not Working**
   - Check browser console for errors
   - Verify Google Identity Services API is enabled
   - Ensure OAuth consent screen is configured

4. **Downloads Not Working**
   - Check if user is properly authenticated
   - Verify download URLs are accessible
   - Check browser console for errors

## Production Deployment

When deploying to production:

1. Update the OAuth consent screen with your production domain
2. Add your production domain to authorized origins and redirect URIs
3. Consider implementing server-side validation
4. Set up proper analytics and monitoring
5. Test the complete user flow

## Support

If you encounter any issues, please check:
1. Google Cloud Console for API quotas and errors
2. Browser console for JavaScript errors
3. Network tab for failed requests
4. This documentation for common solutions 