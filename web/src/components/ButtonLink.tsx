import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { colors, fontFamily } from "../theme";

const useStyles = makeStyles({
    button: {
        display: "inline-block",
        fontFamily,
        fontSize: "0.95rem",
        fontWeight: 600,
        lineHeight: 1,
        padding: "14px 22px",
        borderRadius: 999,
        textDecoration: "none",
        whiteSpace: "nowrap",
        border: "1px solid transparent",
        transition: "background 150ms, color 150ms, border-color 150ms",
    },
    primary: {
        background: colors.brand,
        color: colors.white,
        "&:hover": { background: colors.brandDark },
    },
    secondary: {
        background: "transparent",
        color: colors.ink,
        borderColor: colors.line,
        "&:hover": { borderColor: colors.ink },
    },
    onDark: {
        background: colors.white,
        color: colors.ink,
        "&:hover": { background: colors.accent },
    },
});

type Props = {
    to: string;
    variant: "primary" | "secondary" | "onDark";
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
