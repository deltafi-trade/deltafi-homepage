import makeStyles from "@mui/styles/makeStyles";
import { Theme, Typography } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontFamily: "poppins",
    margin: "0 auto 10px",
    fontWeight: 400,
    fontSize: 16,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "85%",
      fontSize: 16,
    },
  },
  header: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textAlign: "center",
  },
  smallHeader: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textAlign: "center",
    fontSize: 36,
  },
}));

interface TitleProp {
  title?: string;
  header?: string;
  size?: string;
}

function Title(props: TitleProp) {
  const classes = useStyles();
  return (
    <>
      {props.header ? (
        <Typography
          variant="h3"
          paragraph
          className={props.size === "small" ? classes.smallHeader : classes.header}
        >
          {props.header}
        </Typography>
      ) : null}
      {props.title ? <Typography className={classes.title}>{props.title}</Typography> : null}
    </>
  );
}

export default Title;
