import React, { useState } from "react";
import { Link } from "gatsby";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import logo from "../images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import UnderlinableLink from "./UnderlinableLink";
import {
    Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {},
    navContainer: {
        padding: "1.2em",
        display: "flex",
        alignItems: "center",
        justifyContent : "space-between"
    },
    linkContainer: {
        display: "flex",
        alignItems: "center",
        textTransform: "uppercase",
        "& > * ": {
            marginLeft: "3rem",
            color: "black",
            textDecoration: "none",
        },
    },
    logo: {
        height: "4em",
        width: "4em",
        display: "block",
        flexBasis: 1,
    },
    logoText: {
        fontSize: "1em",
        fontFamily: "Montserrat",
        fontWeight: 600,
    },
    logoContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    drawer: {
        maxHeight: "0vh",
        overflow: "hidden",
        transition: "max-height 0.2s ease-out",
        "&.slide": {
            maxHeight: "100vh",
            transition: "max-height 0.5s ease-in",
        },
    },
    link: {
        padding: "0em 0.5em",
        color: "black",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
});

const LinksList = ({ links, linksHref, opened }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <div
            className={
                opened ? [classes.drawer, "slide"].join(" ") : classes.drawer
            }
        >
            <Divider />
            <List>
                {links.map((link: string, i: number) => (
                    <div style={{ width: "95%", margin: "auto" }}>
                        <ListItem key={link}>
                            <a
                                className={classes.link}
                                href={linksHref[i]}
                                style={{ textAlign: "center" }}
                            >
                                <ListItemText>{link}</ListItemText>
                            </a>
                        </ListItem>
                    </div>
                ))}
            </List>
            <Divider />
        </div>
    );
};
export default () => {
    const classes = useStyles();
    const theme = useTheme();
    const [opened, setOpened] = useState(false);
    const links = ["Home", "Our Products", "About Us", "Contact Us", "Gallery"];
    const linksHref = [
        "/home",
        "/products",
        "/about-us",
        "/contact-us",
        "/gallery",
    ];
    const DesktopLink = (
        <div className={classes.linkContainer}>
            {links.map((link, index) => (
                <UnderlinableLink to={linksHref[index]}>
                    {link}
                </UnderlinableLink>
            ))}
        </div>
    );
    const toggleDrawer = () => {
        setOpened((op) => !op);
    };
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <nav className={classes.root}>
            <div className={classes.navContainer}>
                <div className={classes.logoContainer}>
                    <img src={logo} className={classes.logo} />
                    <span className={classes.logoText}>MEYKING</span>
                </div>
                {matches ? (
                    <Button onClick={toggleDrawer}>
                        <MenuIcon
                            style={{ height: "1.5em", width: "1.5em" }}
                        ></MenuIcon>
                    </Button>
                ) : (
                    DesktopLink
                )}
            </div>
            {matches && <LinksList {...{ links, linksHref, opened }} />}
        </nav>
    );
};
