import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/styles";
import { Layout } from "../layout";
import BlockContent from "@sanity/block-content-to-react";

const useProductPageStyles = makeStyles({
    container: {
        display: "grid",
        marginTop: "2rem",
        gridTemplateColumns: "repeat(auto-fit,minmax(1000px,1fr))",
        "@media (min-width:950px)": {
            gridTemplateColumns: "40vw 60vw",
        },
        width: "90%",
        minWidth: "500",
        margin: "auto",
        fontSize : "2.3vmin"
    },
    image: {
        width: "100%",
        padding : "3rem",
        maxWidth : "600px",
        boxSizing : "border-box"
        //maxWidth: "500px",
    },

    productName: {
        fontSize: "2em",
        fontWeight: 500,
    },
    categoryName: {
        fontSize: "1em",
    },
    description: {
        fontSize: "1em",
        fontWeight: 600,
    },
    descriptionContainer: {},
});

const ProductPage = (props) => {
    const classes = useProductPageStyles();
    const {
        thumbnail: thumbnailData,
        product,
        slug,
        Categories,
        _rawDescription,
        id,
    } = props.pageResources.json.pageContext;
    const categories = Categories.map((category) => category.title);
    const mainCategory = categories[0];
    const thumbnail = thumbnailData.asset.gatsbyImageData;
    const blocks = _rawDescription;

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
                    <div className={classes.description}>Description</div>
                    <div className={classes.descriptionContainer}>
                        <BlockContent blocks={blocks} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default ProductPage;
