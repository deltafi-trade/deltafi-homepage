import { Route } from "react-router-dom";
import AppFooter from "components/AppFooter";
import Header from "./components/Header";

function CustomRoute({ component: Component, ...rest }) {
  return (
    <>
      <Header />
      <Route
        {...rest}
        component={(props) => <Component {...props} />}
      />
      <AppFooter />
    </>
  );
}

export default CustomRoute;
