import React, { useState } from "react";
import { Link } from "gatsby";
import { Layout } from "../layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    imageContainer: (hovered) => ({
        filter: hovered ? "brightness(80%)" : "none",
        transitionDuration: "300ms",
    }),
    productName: {
        fontSize: "0.9em",
    },
    category: {
        fontSize: "0.7em",
    },
    productImage: {
        position: "relative",
    },
    link: {
        color: "black",
        textDecoration: "none",
    },
    viewProduct: {
        background: "white",
        color: "black",
        width: "50%",
        textAlign: "center",
        fontSize: "0.8em",
        zIndex: 10000,
        position: "absolute",
        padding: "1em 2em",
        top: "50%",
        opacity: "85%",
        left: "50%",
        transform: "translate(-50%,-50%)",
    },
});

const Product = ({ product, image, categories, slug }) => {
    const [hovered, setHovered] = useState(false);
    const classes = useStyles(hovered);
    return (
        <div>
            <Link to={`/products/${slug}`} className={classes.link}>
                <div className={classes.productImage}>
                    <div>
                        {hovered && (
                            <div
                                className={classes.viewProduct}
                                onMouseEnter={() => setHovered(true)}
                            >
                                View Product
                            </div>
                        )}
                        <GatsbyImage
                            image={image}
                            alt={product}
                            className={classes.imageContainer}
                            onMouseOver={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        />
                    </div>
                </div>
                <div>
                    <div className={classes.productName}>{product}</div>
                    <div>
                        {categories.map((category) => (
                            <div className={classes.category}>{category}</div>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
};
const useProductsStyles = makeStyles({
    productsContainer: {
        display: "grid",
        gridGap: "50px",
        gridTemplateColumns: "repeat(auto-fit,minmax(max(20vw,100px),1fr))",
        width: "90%",
        minWidth: "500px",
        margin: "auto",
    },
    title: {
        fontSize: "2rem",
        textAlign: "center",
        fontFamily: "Montserrat",
        marginBottom: "3rem",
    },
    categorySlider: {
        textAlign: "center",
        marginBottom: "2rem",
        width: "95%",
        margin: "auto",
    },
    carouselItem: {
        textAlign: "center",
    },
});
const Products = (props) => {
    const { products, category } = props.pageContext;
    const classes = useProductsStyles();
    return (
        <Layout>
            <div className={classes.title}> Explore our {category} </div>
            <div className={classes.productsContainer}>
                {products != undefined ? products.map((productData) => (
                    <Product {...productData} />
                )) : "Nothing to show here"}
            </div>
        </Layout>
    );
};

export default Products;
