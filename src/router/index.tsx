import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { GlobalStyles } from "../styles/styles";

// Import JumpoEnglish components
const JumpoEnglish = lazy(() => import("../pages/Product/JumpoEnglish"));
const JumpoEnglishPrivacy = lazy(() => import("../pages/Product/JumpoEnglish/Privacy"));
const JumpoEnglishTermsAndConditions = lazy(() => import("../pages/Product/JumpoEnglish/TermsAndConditions"));

const Router = () => {
  const getComponent = (componentName: string) => {
    switch (componentName) {
      case "JumpoEnglish":
        return JumpoEnglish;
      case "JumpoEnglishPrivacy":
        return JumpoEnglishPrivacy;
      case "JumpoEnglishTermsAndConditions":
        return JumpoEnglishTermsAndConditions;
      default:
        return lazy(() => import(`../pages/${componentName}`));
    }
  };

  return (
    <Suspense fallback={null}>
      <GlobalStyles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={getComponent(routeItem.component)}
            />
          );
        })}
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
