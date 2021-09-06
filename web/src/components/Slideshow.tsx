import React, { Component } from "react";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles({
    root: {
        background: "#EEF4F6",
        padding: "5%",
    },
    bannerSlide: {
        padding: 30,
    },
    bannerBranding: {
        display: "flex",
        alignItems: "flex-start",
    },
    bannerShopNow: {
        '&:hover' : {
            background : "#4a5863",
            transitionDuration : "200ms"
        },
        background: "#4D5E6B",
        color: "white",
        padding: 10,
        fontFamily : "Poppins",
        fontSize : "1.2rem",
        border: "none",
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        "& > a" : {
            color : "white",
            textDecoration : "none",
        }
    },
    bannerContainer: {
        display: "flex",
        position: "relative",
    },
    bannerTitle: {
        margin: 0,
        paddingTop: 0,
        fontSize: "3rem",
        lineHeight : "1",
        fontWeight: 500,
    },
    hero: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    lace: {
        width: "60vmin",
        maxWidth: "40vw",
        marginRight: "5vmin",
    },
    rectangleContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100px",
        marginRight: "1rem",
        transform: "translateY(5px)",
        "& > *": {
            flexGrow: 4,
            background: "#0065B3",
            width: 35,
            marginBottom: 10,
        },
        "& > *:nth-child(2)": {
            flexGrow: 2,
            background: "#3FC8F4",
        },
    },
});
//const sliderQuery = graphql`
//query Image {

//}
//`
const SimpleSlider = ({hideAboutUs}) => {
    const classes = useStyles();
    const matches = useMediaQuery("(min-width:600px)");
    return (
        <div className={classes.root}>
            <div className={classes.hero}>
                <div className={classes.bannerSlide}>
                    <div className={classes.bannerContainer}>
                        <div className={classes.bannerBranding}>
                            <div className={classes.rectangleContainer}>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <h1 className={classes.bannerTitle}>
                                    MEYKING ENTREPRISE
                                </h1>
                                <div>
                                    Your one-stop destination for custom
                                    packaging
                                </div>
                                {!hideAboutUs && 
                                <button className={classes.bannerShopNow}>
                                    <Link to="/about-us">ABOUT US</Link>
                                </button>}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {matches && (
                        <StaticImage
                            src="../images/hero-image.png"
                            alt="Box with Laces"
                            className={classes.lace}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SimpleSlider;
