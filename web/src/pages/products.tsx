import React, { useState } from "react";
import { graphql, StaticQuery, useStaticQuery, Link } from "gatsby";
import { Layout } from "../layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/styles";

const query = graphql`
    query MyQuery {
        allSanityProduct {
            edges {
                node {
                    id
                    thumbnail {
                        asset {
                            gatsbyImageData(aspectRatio: 1, fit: CROP)
                            #gatsbyImageData
                        }
                    }
                    product
                    slug {
                        current
                    }
                    Categories {
                        title
                    }
                }
            }
        }
    }
`;

const useStyles = makeStyles(({
    imageContainer: hovered => ( {
        filter : hovered ? "brightness(80%)" : "none",
        transitionDuration: "300ms",
    }),
    productName: {
        fontSize: "1.5rem",
    },
    category: {},
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
        width: "60%",
        textAlign : "center",
        zIndex: 10000,
        position: "absolute",
        padding : "1em 2em",
        top: "50%",
        opacity : "85%",
        left: "50%",
        transform: "translate(-50%,-50%)",
    },
}));
const Product = ({ product, image, categories, slug }) => {
    const [hovered, setHovered] = useState(false);
    const classes = useStyles(hovered);
    return (
        <div>
            <Link to={`/products/${slug}`} className={classes.link}>
                <div className={classes.productImage}>
                    <div>
                        {hovered && (
                            <div className={classes.viewProduct} onMouseEnter={() => setHovered(true)}>
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
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        width: "90%",
        minWidth: "500",
        margin: "auto",
    },
    title: {
        fontSize: "3rem",
        textAlign: "center",
        fontFamily: "Montserrat",
        marginBottom: "3rem",
    },
});
const Products = () => {
    const data = useStaticQuery(query);
    const classes = useProductsStyles();
    const processed = data.allSanityProduct.edges.map(({ node }) => {
        const { product } = node;
        const image = node.thumbnail.asset.gatsbyImageData;
        const categories = node.Categories.map((category) => category.title);
        const slug = node.slug.current;
        return { product, image, categories, slug };
    });

    return (
        <Layout>
            <div className={classes.title}> Explore Our Products </div>
            <div className={classes.productsContainer}>
                {processed.map((productData) => (
                    <Product {...productData} />
                ))}
            </div>
        </Layout>
    );
};

export default Products;
