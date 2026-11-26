import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ButtonLink from "./ButtonLink";
import { colors, container, fontFamily } from "../theme";

const MOBILE = "@media (max-width: 860px)";

const useStyles = makeStyles({
    root: {
        position: "sticky",
        top: 0,
        zIndex: 1100,
        background: colors.white,
        borderBottom: `1px solid ${colors.line}`,
        fontFamily,
    },
    bar: {
        ...container,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    brand: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        textDecoration: "none",
        color: colors.ink,
        fontWeight: 600,
        fontSize: "1.05rem",
        letterSpacing: "0.14em",
    },
    logo: {
        width: 40,
        flexShrink: 0,
    },
    links: {
        display: "flex",
        alignItems: "center",
        gap: 32,
        [MOBILE]: { display: "none" },
    },
    link: {
        color: colors.ink,
        textDecoration: "none",
        fontSize: "0.95rem",
        fontWeight: 500,
        "&:hover": { color: colors.brand },
    },
    activeLink: {
        color: colors.brand,
    },
    menuButton: {
        display: "none",
        background: "none",
        border: "none",
        padding: 8,
        margin: -8,
        color: colors.ink,
        cursor: "pointer",
        [MOBILE]: { display: "flex" },
    },
    drawer: {
        display: "none",
        [MOBILE]: {
            display: "flex",
            flexDirection: "column",
            padding: "8px 24px 24px",
            borderTop: `1px solid ${colors.line}`,
            background: colors.white,
        },
    },
    drawerLink: {
        padding: "12px 0",
        borderBottom: `1px solid ${colors.line}`,
        marginBottom: 0,
        "&:last-of-type": { marginBottom: 20 },
    },
});

const links = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "About", to: "/about-us" },
    { label: "Contact", to: "/contact-us" },
];

const Navbar = () => {
    const classes = useStyles();
    const [opened, setOpened] = useState(false);
    const navLinks = (extraClass: string) =>
        links.map(({ label, to }) => (
            <Link
                key={to}
                to={to}
                className={`${classes.link} ${extraClass}`}
                activeClassName={classes.activeLink}
            >
                {label}
            </Link>
        ));
    return (
        <nav className={classes.root}>
            <div className={classes.bar}>
                <Link to="/" className={classes.brand}>
                    <StaticImage
                        src="../images/logo.png"
                        alt=""
                        width={40}
                        placeholder="none"
                        loading="eager"
                        className={classes.logo}
                    />
                    MEYKING
                </Link>
                <div className={classes.links}>
                    {navLinks("")}
                    <ButtonLink to="/contact-us" variant="primary">
                        Request a quote
                    </ButtonLink>
                </div>
                <button
                    className={classes.menuButton}
                    onClick={() => setOpened((isOpen) => !isOpen)}
                    aria-label={opened ? "Close menu" : "Open menu"}
                    aria-expanded={opened}
                >
                    {opened ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>
            {opened && (
                <div className={classes.drawer}>
                    {navLinks(classes.drawerLink)}
                    <ButtonLink to="/contact-us" variant="primary">
                        Request a quote
                    </ButtonLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
