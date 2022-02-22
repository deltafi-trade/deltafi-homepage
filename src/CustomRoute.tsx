import { Route } from "react-router-dom";
import { styled } from "@material-ui/core/styles";
import Footer from "components/Footer";
import Header from "./components/Header";

const StyledPage = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  backgroundImage: "url(/images/homepage/bottom-bg.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "100%",
  [theme.breakpoints.down("sm")]: {
    backgroundSize: "500px",
  },
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
