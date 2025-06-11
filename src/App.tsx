import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/global.css"; // Import global styles
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resources" component={Resources} />
        <Route path="/termandcondition" component={TermsAndConditions} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App; 