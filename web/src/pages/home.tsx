import { Layout } from "../layout";
import React from "react";
import Slideshow from "../components/Slideshow";
import { makeStyles } from "@material-ui/styles";
import {StaticImage} from "gatsby-plugin-image";

const useStyles = makeStyles({
    exploreContainer: {
        marginTop: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
        width: "95%",
        minWidth: "300px",
    },
    exploreHeader: {
        width: "50%",
        minWidth: "200px",
        fontSize: "1.5rem",
        textAlign: "center",
        border: "0.5px solid black",
        padding: "0.5em 2em",
        fontFamily: "Montserrat",
        textTransform: "uppercase",
        margin: 0,
    },
    exploreHeaderContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    exploreHeaderLine: {
        width: "15vw",
        minWidth : "80px",
        margin: 0,
        backgroundColor : "black",
        color : "black",
        height : "1px",
    },
    exploreProductContainer : {
        display : "flex",
        flexDirection : "column",
        justify : "space-between",
        alignItems : "center",
    },
    exploreProduct: {
        height : "3rem",
        width : "5rem",
        maxWidth : "80vw"
    }
});
const Home = () => {
    const classes = useStyles();
    return (
        <Layout>
            <Slideshow></Slideshow>
            <div className={classes.exploreContainer}>
                <div className={classes.exploreHeaderContainer}>
                        <div className={classes.exploreHeaderLine}></div>
                        <h1 className={classes.exploreHeader}>
                            Explore our products
                        </h1>
                        <div className={classes.exploreHeaderLine}></div>
                </div>
                <div className={classes.exploreProductContainer}>
                    {new Array(3).fill(1).map(()=>{
                        return (
                            <div className={classes.exploreProduct}>
                                <StaticImage src="src/images/logo.png" alt="product"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default Home;
