import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/styles";
import { Layout } from "../layout";
import BlockContent from "@sanity/block-content-to-react";

const useProductPageStyles = makeStyles({
    container: {
        display: "flex",
        marginTop: "2rem",
        width: "95%",
        justifyContent: "space-evenly",
        margin: "auto",
        fontSize: "1rem",
    },
    image: {
        //width: "50vw",
        paddingTop: "0",
        boxSizing: "border-box",
        marginRight : "2rem",
        maxWidth : "500px"
        //maxWidth: "500px",
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
        fontFamily: "Poppins",
        fontWeight: 300,
    },
    block : {
        "& > h2" : {
            textDecoration : "none",
            fontWeight : 400,
            fontSize : "1em"
        },
        "& > *" : {
            fontSize : "0.7em"
        },
        "& > ul" : {
            paddingInlineStart : "20px"
        }
    }
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
            <div className={classes.image}>
                <GatsbyImage
                    image={gatsbyImageData}
                    alt="alternative product image"
                />
            </div>
        ));
    }
    debugger
    return (
        <Layout>
            <div className={classes.container}>
                <div className={classes.image}>
                    <GatsbyImage
                        image={thumbnail}
                        alt={`thumbnail of ${product}`}
                    />
                </div>
                <div>
                    <div className={classes.categoryName}>{mainCategory}</div>
                    <div className={classes.productName}>{product}</div>
                    <div className={classes.descriptionContainer}>
                        <BlockContent blocks={blocks} className={classes.block} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default ProductPage;
