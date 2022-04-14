import { Route } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Footer from "components/Footer";
import Header from "./components/Header";

const StyledPage = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
}));

function CustomRoute({ component: Component, ...rest }) {
  return (
    <StyledPage>
      <Header />
      <Route
        {...rest}
        component={(props) => <Component {...props} />}
      />
      <Footer />
    </StyledPage>
  );
}

export default CustomRoute;
