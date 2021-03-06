import React, { Component } from "react";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles({
    root: {
        background: "rgb(238,244,246)",
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
        '@media (max-width: 520px)' : {
            fontSize : "0.85rem"
        },
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
        '@media (max-width: 520px)' : {
            fontSize : "1.5rem"
        },
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
    bannerDescription : {
        '@media (max-width: 520px)' : {
            fontSize : "0.9rem"
        },
    }
});
//const sliderQuery = graphql`
//query Image {

//}
//`
const SimpleSlider = ({hideAboutUs}) => {
    const classes = useStyles();
    const matches = useMediaQuery("(min-width:800px)");
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
                                <div className={classes.bannerDescription}>
                                    Your one-stop destination for custom
                                    packaging
                                </div>
                                {!hideAboutUs && 
                                <button className={classes.bannerShopNow}>
                                    <Link to="/products">EXPLORE OUR PRODUCTS</Link>
                                </button>}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {matches && (
                        <StaticImage
                            src="../images/hero-image.png"
                            placeholder="tracedSVG"
                            alt="Box with Laces"
                            loading="eager"
                            className={classes.lace}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SimpleSlider;
