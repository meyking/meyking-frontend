import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {Link} from "gatsby"
import { makeStyles } from "@material-ui/styles";
import { Layout } from "../layout";
import {useMediaQuery} from "@material-ui/core"
import BlockContent from "@sanity/block-content-to-react";
import Button from "../components/Button";

const useProductPageStyles = makeStyles({
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
        marginTop: "2rem",
        width: "95%",
        //justifyContent: "space-evenly",
        margin: "auto",
        fontSize: "1rem",
    },
    image: {
        //width: "50vw",
        paddingTop: "0",
        boxSizing: "border-box",
        marginRight: "1vmin",
        marginBottom: "2rem",
        //maxWidth: "500px",

        // height : "100vh",
        maxWidth: "800px",
        maxHeight: "800px",
        width: "auto",
        height: "auto",
    },

    productName: {
        fontSize: "1.5em",
        fontWeight: 500,
    },
    categoryName: {
        fontSize: "0.8em",
    },
    description: {
        fontSize: "1em",
        fontWeight: 600,
    },
    descriptionContainer: {
        fontFamily: "Montserrat",
        fontWeight: 400,
        fontSize : "1.4em",
        lineHeight : 1.5,
    },
    block: {
        "& > h2": {
            textDecoration: "none",
            fontWeight: 400,
            fontSize: "1em",
        },
        "& > *": {
            fontSize: "0.7em",
        },
        "& > ul": {
            paddingInlineStart: "20px",
        },
    },
    button: {
        fontSize: "0.8em",
        fontWeight: 600,
    },
});

const ProductPage = (props) => {
    const classes = useProductPageStyles();
    console.log(props);
    const {
        thumbnail: thumbnailData,
        product,
        slug,
        Categories,
        _rawDescription,
        images: imagesData,
        id,
    } = props.pageContext;
    const categories = Categories.map((category) => category.title);
    const mainCategory = categories[0];
    const thumbnail = thumbnailData.asset.gatsbyImageData;
    const noImage = imagesData == null || imagesData.length === 0;
    const blocks = _rawDescription;
    let images, imageComponents;
    if (!noImage) {
        images = imagesData.map((image) => image.asset.gatsbyImageData);
        imageComponents = images.map((gatsbyImageData) => (
            <GatsbyImage
                className={classes.image}
                image={gatsbyImageData}
                alt="alternative product image"
            />
        ));
    }
    const matches = useMediaQuery("(min-width:600px)");
    return (
        <Layout>
            <div style={{display : "flex", maxWidth : "1800px", margin : "auto", flexDirection : matches ? "row" : "column"}}>
                <div style={{ display: "flex", flexDirection: "column", marginLeft : "1rem", minWidth : "350px", width : "100%" }}>
                    <GatsbyImage
                        image={thumbnail}
                        className={classes.image}
                        alt={`thumbnail of ${product}`}
                    />
                    {imageComponents}
                </div>
                <div style={{ fontSize: "2.5vmin", marginLeft: "1rem", marginRight : "1rem", maxWidth : "1000px", width : "100%" }}>
                    <div className={classes.categoryName}>{mainCategory}</div>
                    <div className={classes.productName}>{product}</div>
                    <Link to="/contact-us" state={{product}}>

                    <Button className={classes.button}>Request A Quote</Button>
                    </Link>
                    <div className={classes.descriptionContainer}>
                        <BlockContent
                            blocks={blocks}
                            className={classes.block}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default ProductPage;
