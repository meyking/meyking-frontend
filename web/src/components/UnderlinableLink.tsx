import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";
const useUnderlinableStyles = makeStyles({
    line: {
        background: "transparent",
        width: "0%",
        transitionDuration: "800ms",
        height: ".2em",
    },
    container: {
        display: "flex",
        cursor: "pointer",
        padding: "1em",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
            "& > *": {
                width: "calc(100% + .8em)",
                transitionDuration: ".7s",
                background: "#4D5E6B",
            },
        },
    },
    link: {
        textAlign: "center",
        color: "black",
        background: "none !important",
        fontWeight: 400,
        textDecoration: "none",
    },
});
export const UnderlinableLink = (props) => {
    const classes = useUnderlinableStyles();
    return (
        <div className={classes.container}>
            <Link {...props} className={classes.link} />
            <div className={classes.line}></div>
        </div>
    );
};
export default UnderlinableLink
