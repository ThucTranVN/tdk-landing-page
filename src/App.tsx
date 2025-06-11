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
import NotFound from "./pages/NotFound";

// Replace this with your actual Google OAuth Client ID
const GOOGLE_CLIENT_ID = "400270614956-5t2suj7g9udlsirvni3t6qtb8jn20be1.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <ThemeProvider>
        <AuthProvider>
          <GlobalStyles />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/resources" component={Resources} />
              <Route path="/termandcondition" component={TermsAndConditions} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App; 