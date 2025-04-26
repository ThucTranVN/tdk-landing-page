import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "./context/ThemeContext";
import 'antd/dist/antd.min.css';

import Router from "./router";
import i18n from "./translation";

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </I18nextProvider>
  </BrowserRouter>
);

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(<App />);
