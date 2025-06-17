import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { GlobalStyles } from "./styles/styles";
import "./styles/global.css"; // Import global styles
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import TermsAndConditions from "./pages/TermsAndConditions";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

// Get Google OAuth Client ID from environment variables
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

if (!GOOGLE_CLIENT_ID) {
  console.error('REACT_APP_GOOGLE_CLIENT_ID is not set in environment variables');
}

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID || ""}>
      <ThemeProvider>
        <AuthProvider>
          <GlobalStyles />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/resources" component={Resources} />
              <Route path="/termandcondition" component={TermsAndConditions} />
              <Route path="/privacy" component={Privacy} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App; 