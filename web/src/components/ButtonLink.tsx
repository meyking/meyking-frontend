import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { colors, fontFamily } from "../theme";

const useStyles = makeStyles({
    button: {
        display: "inline-block",
        fontFamily,
        fontSize: "0.95rem",
        fontWeight: 500,
        lineHeight: 1,
        padding: "14px 20px",
        borderRadius: 2,
        textDecoration: "none",
        whiteSpace: "nowrap",
        border: "1px solid transparent",
        transition: "background-color 150ms ease-out, border-color 150ms ease-out",
    },
    primary: {
        background: colors.brand,
        color: colors.white,
        "&:hover": { background: colors.brandDark },
    },
    secondary: {
        background: "transparent",
        color: colors.ink,
        borderColor: colors.ink,
        "&:hover": { background: colors.surface },
    },
});

type Props = {
    to: string;
    variant: "primary" | "secondary";
    children: React.ReactNode;
};

const ButtonLink = ({ to, variant, children }: Props) => {
    const classes = useStyles();
    return (
        <Link to={to} className={`${classes.button} ${classes[variant]}`}>
            {children}
        </Link>
    );
};

export default ButtonLink;
