import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { colors, contact, container, fontFamily } from "../theme";

const useStyles = makeStyles({
    root: {
        marginTop: 96,
        borderTop: `1px solid ${colors.line}`,
        background: colors.surface,
        fontFamily,
        color: colors.muted,
        fontSize: "0.95rem",
        lineHeight: 1.7,
    },
    columns: {
        ...container,
        padding: "56px 24px 40px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1.5fr",
        gap: 48,
        "@media (max-width: 760px)": {
            gridTemplateColumns: "1fr",
            gap: 32,
        },
    },
    brand: {
        color: colors.ink,
        fontWeight: 700,
        letterSpacing: "0.14em",
        marginBottom: 12,
    },
    blurb: {
        margin: 0,
        maxWidth: 360,
    },
    heading: {
        color: colors.ink,
        fontWeight: 600,
        marginBottom: 12,
    },
    list: {
        display: "flex",
        flexDirection: "column",
    },
    link: {
        color: colors.muted,
        textDecoration: "none",
        "&:hover": { color: colors.brand },
    },
    legal: {
        ...container,
        padding: "20px 24px 32px",
        borderTop: `1px solid ${colors.line}`,
        fontSize: "0.85rem",
    },
});

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <div className={classes.columns}>
                <div>
                    <div className={classes.brand}>MEYKING</div>
                    <p className={classes.blurb}>
                        Custom bags, boxes and pouches for retail and luxury
                        brands.
                    </p>
                </div>
                <div>
                    <div className={classes.heading}>Explore</div>
                    <div className={classes.list}>
                        <Link to="/products" className={classes.link}>
                            Products
                        </Link>
                        <Link to="/about-us" className={classes.link}>
                            About
                        </Link>
                        <Link to="/contact-us" className={classes.link}>
                            Contact
                        </Link>
                    </div>
                </div>
                <div>
                    <div className={classes.heading}>Head office</div>
                    <div className={classes.list}>
                        {contact.addressLines.map((line) => (
                            <span key={line}>{line}</span>
                        ))}
                        <a href={contact.phoneHref} className={classes.link}>
                            {contact.phone}
                        </a>
                        <a
                            href={`mailto:${contact.email}`}
                            className={classes.link}
                        >
                            {contact.email}
                        </a>
                    </div>
                </div>
            </div>
            <div className={classes.legal}>
                © Meyking Enterprise, {new Date().getFullYear()}
            </div>
        </footer>
    );
}
