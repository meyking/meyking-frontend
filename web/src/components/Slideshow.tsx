import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/styles";
import Img from "gatsby-image";

const useStyles = makeStyles({
    root: {
        background: "#EEF4F6",
        padding: "5%",
    },
    bannerSlide: {
        padding: 30,
    },
    bannerBranding: {
        paddingLeft: 20,
    },
    bannerShopNow: {
        background: "#4D5E6B",
        color: "white",
        padding: 10,
        border: "none",
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
    },
    bannerContainer: {
        display: "flex",
    },
    bannerTitle: {
        margin: 0,
        fontWeight: 500,
    },
    rectangleContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 80,
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
const sliderQuery = graphql`
    query Image {

    }
`
const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const data = useStaticQuery(sliderQuery)
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Slider {...settings}>
                <div>
                    <div className={classes.bannerSlide}>
                        <div className={classes.bannerContainer}>
                            <div className={classes.rectangleContainer}>
                                <div></div>
                                <div></div>
                            </div>
                            <div className={classes.bannerBranding}>
                                <h1 className={classes.bannerTitle}>
                                    MEYKING ENTREPRISE
                                </h1>
                                <span>
                                    Your one-stop destination for custom
                                    packaging
                                </span>
                            </div>
                        </div>
                        <button className={classes.bannerShopNow}>
                            SHOP NOW
                        </button>
                    </div>
                    <Img ></Img>
                </div>

                <div>
                    <h3>2</h3>
                </div>
            </Slider>
        </div>
    );
};

export default SimpleSlider;
