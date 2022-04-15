import makeStyles from "@mui/styles/makeStyles";
import { Theme, Typography } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        fontFamily: "Rubik",
        margin: "0 auto 10px",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            width: "85%",
            fontSize: 16,
            fontWeight: "normal",
        },
    },
    header: {
        color: theme.palette.primary.main,
        fontWeight: 700,
        textAlign: "center",
    },
}));

interface TitleProp {
    title?: string,
    header?: string
}


function Title(props: TitleProp) {
    const classes = useStyles();
    return (
        <>
            {props.header ? <Typography variant="h3" paragraph className={classes.header}>
                {props.header}
            </Typography> : null}
            {props.title ? <Typography className={classes.title}>
                {props.title}
            </Typography> : null}
        </>)
};

export default Title;