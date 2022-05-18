import { Route } from "react-router-dom";
import AppFooter from "components/AppFooter";
import Header from "./components/Header";
import styled from "styled-components";

const StyledPage = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
}));

function CustomRoute({ component: Component, ...rest }) {
  return (
    <StyledPage>
      <Header />
      <Route {...rest} component={(props) => <Component {...props} />} />
      <AppFooter />
    </StyledPage>
  );
}

export default CustomRoute;
