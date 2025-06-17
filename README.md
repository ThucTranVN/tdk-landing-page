[![Live Status](https://api.netlify.com/api/v1/badges/809534d6-d814-449f-a5b1-6839ea749cfd/deploy-status)](https://app.netlify.com/sites/tdk-landing-page/deploys)
![Alt](https://repobeats.axiom.co/api/embed/1829da821be0f91393cda8b77e94d9bfe46146b0.svg "Repobeats analytics image")

# TDK Landing Page

A modern, responsive landing page for TDK Technology Solutions built with React, TypeScript, and Ant Design.

## Features

- 🌙 Dark/Light theme support
- 🌍 Internationalization (i18n)
- 📱 Responsive design
- 🔐 Google OAuth integration
- 📊 Google Sheets integration for dynamic content
- 🎨 Modern UI with Ant Design components
- 📱 Progressive Web App (PWA) - Installable and works offline

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd tdk-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your actual API keys
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

## Security Setup

⚠️ **Important:** This project uses environment variables for sensitive information like API keys and client IDs.

See [Docs/SECURITY.md](./Docs/SECURITY.md) for detailed setup instructions.

## Deployment

🚀 **Production Deployment:** Environment variables must be configured on your deployment platform.

See [Docs/DEPLOYMENT.md](./Docs/DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deployment Steps:

1. **Configure environment variables** in your deployment platform:
   ```bash
   REACT_APP_GOOGLE_CLIENT_ID=your_google_oauth_client_id_here.apps.googleusercontent.com
   REACT_APP_GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key_here
   ```

2. **Update API key restrictions** in Google Cloud Console to include your production domain

3. **Deploy your application**

## Documentation

📚 **Complete documentation is available in the [Docs](./Docs/) folder:**

- **[SECURITY.md](./Docs/SECURITY.md)** - Security setup and best practices
- **[DEPLOYMENT.md](./Docs/DEPLOYMENT.md)** - Production deployment guide
- **[TROUBLESHOOTING.md](./Docs/TROUBLESHOOTING.md)** - Common issues and solutions
- **[GOOGLE_SHEETS_API_SETUP.md](./Docs/GOOGLE_SHEETS_API_SETUP.md)** - Google Sheets API configuration
- **[GOOGLE_OAUTH_SETUP.md](./Docs/GOOGLE_OAUTH_SETUP.md)** - Google OAuth setup guide
- **[GOOGLE_SHEETS_SETUP.md](./Docs/GOOGLE_SHEETS_SETUP.md)** - Original Google Sheets setup
- **[PWA_SETUP.md](./Docs/PWA_SETUP.md)** - Progressive Web App configuration

## PWA Features

📱 **Progressive Web App:** This application is configured as a PWA with the following features:

- **Installable** - Users can add to home screen
- **Offline functionality** - Works without internet connection
- **App-like experience** - Full-screen mode without browser UI
- **Fast loading** - Cached assets for better performance

See [Docs/PWA_SETUP.md](./Docs/PWA_SETUP.md) for detailed PWA configuration and testing instructions.

## Troubleshooting

If you're having issues with Google Sheets API or asset loading:

1. **Check the troubleshooting guide:** [Docs/TROUBLESHOOTING.md](./Docs/TROUBLESHOOTING.md)
2. **Verify environment variables** are properly set
3. **Check browser console** for error messages
4. **Ensure Google Sheets API** is enabled in Google Cloud Console

### Common Issues

- **"Using fallback data" warning**: Check your API key configuration
- **"Failed to fetch sheet names"**: Verify Google Sheets API is enabled
- **"No assets found"**: Check spreadsheet structure and permissions
- **Production deployment issues**: See [Docs/DEPLOYMENT.md](./Docs/DEPLOYMENT.md)
- **PWA installability issues**: See [Docs/PWA_SETUP.md](./Docs/PWA_SETUP.md)

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
