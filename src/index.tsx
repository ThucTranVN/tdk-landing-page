import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import 'antd/dist/antd.min.css';

import Router from "./router";
import i18n from "./translation";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Get Google OAuth Client ID from environment variables
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

if (!GOOGLE_CLIENT_ID) {
  console.error('REACT_APP_GOOGLE_CLIENT_ID is not set in environment variables');
}

const App = () => (
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID || ""}>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(<App />);

// Register service worker for PWA functionality
serviceWorkerRegistration.register();
