# Deployment Guide

## Environment Variables in Production

Since `.env.local` is not pushed to production, you need to configure environment variables on your deployment platform.

## Netlify Deployment

### 1. Build Settings
Your `netlify.toml` should look like this:
```toml
[build]
  publish = "build"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"
```

### 2. Environment Variables Setup
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Select your site
3. Go to **"Site settings"** > **"Environment variables"**
4. Add these variables:

| Key | Value |
|-----|-------|
| `REACT_APP_GOOGLE_CLIENT_ID` | `400270614956-5t2suj7g9udlsirvni3t6qtb8jn20be1.apps.googleusercontent.com` |
| `REACT_APP_GOOGLE_SHEETS_API_KEY` | `AIzaSyBqvJkR_SKTVAIIjq5d9wb26E8q0bYAnxM` |

### 3. Deploy
```bash
npm run build
# Then push to your connected Git repository
```

## Vercel Deployment

### 1. Environment Variables Setup
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **"Settings"** > **"Environment Variables"**
4. Add the same variables as above

### 2. Deploy
```bash
vercel --prod
```

## GitHub Pages Deployment

### 1. Create GitHub Secrets
1. Go to your GitHub repository
2. Go to **"Settings"** > **"Secrets and variables"** > **"Actions"**
3. Add repository secrets:
   - `REACT_APP_GOOGLE_CLIENT_ID`
   - `REACT_APP_GOOGLE_SHEETS_API_KEY`

### 2. Update GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        env:
          REACT_APP_GOOGLE_CLIENT_ID: ${{ secrets.REACT_APP_GOOGLE_CLIENT_ID }}
          REACT_APP_GOOGLE_SHEETS_API_KEY: ${{ secrets.REACT_APP_GOOGLE_SHEETS_API_KEY }}
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## Firebase Hosting

### 1. Environment Variables Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **"Functions"** > **"Configuration"**
4. Add environment variables

### 2. Deploy
```bash
firebase deploy
```

## Environment Variables Reference

### Required Variables
```bash
# Google OAuth Configuration
REACT_APP_GOOGLE_CLIENT_ID=400270614956-5t2suj7g9udlsirvni3t6qtb8jn20be1.apps.googleusercontent.com

# Google Sheets API Configuration
REACT_APP_GOOGLE_SHEETS_API_KEY=AIzaSyBqvJkR_SKTVAIIjq5d9wb26E8q0bYAnxM
```

### Important Notes
- **All React environment variables must start with `REACT_APP_`**
- **Environment variables are embedded at build time**
- **Changes require a new deployment**
- **Never commit sensitive keys to version control**

## Testing Production Build Locally

To test your production build with environment variables:

```bash
# Set environment variables
set REACT_APP_GOOGLE_CLIENT_ID=400270614956-5t2suj7g9udlsirvni3t6qtb8jn20be1.apps.googleusercontent.com
set REACT_APP_GOOGLE_SHEETS_API_KEY=AIzaSyBqvJkR_SKTVAIIjq5d9wb26E8q0bYAnxM

# Build and serve
npm run build
npx serve -s build
```

## Troubleshooting Production Issues

### Common Problems:
1. **"Using fallback data"** - Environment variables not set in production
2. **CORS errors** - API key restrictions blocking production domain
3. **Build failures** - Missing environment variables during build

### Solutions:
1. **Check environment variables** are set correctly in deployment platform
2. **Add production domain** to API key restrictions in Google Cloud Console
3. **Verify API key permissions** include Google Sheets API
4. **Check build logs** for environment variable errors

## Security Best Practices

1. **Use different API keys** for development and production
2. **Restrict API keys** to specific domains and APIs
3. **Monitor API usage** in Google Cloud Console
4. **Rotate keys regularly** for security
5. **Use environment-specific configurations**

## Quick Deployment Checklist

- [ ] Environment variables configured in deployment platform
- [ ] API key restrictions updated for production domain
- [ ] Google Sheets API enabled in Google Cloud Console
- [ ] Spreadsheet permissions set to public read
- [ ] Build completes successfully
- [ ] Production site loads without errors
- [ ] Google OAuth works in production
- [ ] Assets load from Google Sheets in production 