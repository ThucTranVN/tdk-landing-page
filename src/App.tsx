import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/global.css"; // Import global styles
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App; 