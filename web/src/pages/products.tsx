import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Layout } from "../layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import {
    FormControl,
    InputLabel,
    MenuItem,
    NativeSelect,
    Select,
} from "@material-ui/core";

const query = graphql`
    query MyQuery {
        allSanityCategory(sort: { order: ASC, fields: title }) {
            edges {
                node {
                    title
                    slug {
                        current
                    }
                    thumbnail {
                        asset {
                            gatsbyImageData(aspectRatio: 1, fit: CROP)
                        }
                    }
                }
            }
        }
        allSanityIndustry(sort: { order: ASC, fields: title }) {
            edges {
                node {
                    title
                    slug {
                        current
                    }
                    thumbnail {
                        asset {
                            gatsbyImageData(aspectRatio: 1, fit: CROP)
                        }
                    }
                }
            }
        }
    }
`;

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
    container: {},
});

const Tag = ({ category, image, slug,baseUrl }) => {
    const [hovered, setHovered] = useState(false);
    const classes = useStyles(hovered);
    return (
        <div className={classes.container}>
            <Link to={`/${baseUrl}/${slug}`} className={classes.link}>
                <div className={classes.productImage}>
                    <div>
                        {hovered && (
                            <div
                                className={classes.viewProduct}
                                onMouseEnter={() => setHovered(true)}
                            >
                                Explore {category}
                            </div>
                        )}
                        <GatsbyImage
                            image={image}
                            alt={category}
                            className={classes.imageContainer}
                            onMouseOver={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        />
                    </div>
                </div>
                <div>
                    <div className={classes.productName}>{category}</div>
                    <div></div>
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
    smallProductContainer: {
        minWidth: "500px",
        margin: "auto",
        width: "90%",
        display: "flex",
        "& > *": {
            maxWidth: "500px",
            marginRight: "50px",
        },
        "& > *:last-child": {
            marginRight: "0px",
        },
    },
    title: {
        fontSize: "2rem",
        textAlign: "center",
        fontFamily: "Montserrat",
        marginTop: "1rem",
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
    button: {
        background: "transparent",
        border: "none",
    },
});
const modes = ["allSanityCategory", "allSanityIndustry"];
const Products = () => {
    const classes = useProductsStyles();
    const [groupMode, setGroupMode] = useState(0);
    const data = useStaticQuery(query);
    let processed = data[modes[groupMode]].edges.map(({ node }) => {
        const { title: category } = node;
        const image = node.thumbnail.asset.gatsbyImageData;
        const slug = node.slug.current;
        return { category, image, slug };
    });

    const handleChange = (event) => {
        const value = event.target.value;
        setGroupMode(parseInt(value));
        console.log(modes[groupMode]);
    };
    return (
        <Layout>
            <div className={classes.title}>
                {" "}
                Explore Our Products
                <div style={{ width: "90%", margin: "auto", marginTop: "1rem" }}>
                    <FormControl>
                        <InputLabel
                            variant="standard"
                            htmlFor="uncontrolled-native"
                        >
                            Group by
                        </InputLabel>
                        <NativeSelect
                            defaultValue={0}
                            value={groupMode}
                            inputProps={{
                                name: "group by",
                                id: "group-by-native",
                            }}
                            onChange={handleChange}
                        >
                            <option value={0}>Product Category</option>
                            <option value={1}>Product Industry</option>
                        </NativeSelect>
                    </FormControl>
                </div>
            </div>

            <Grid
                container
                spacing={10}
                style={{ width: "90%", margin: "auto" }}
            >
                {processed.map((productData) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Tag {...productData} baseUrl={groupMode === 0? "category" : "industry"} />
                    </Grid>
                ))}
            </Grid>
        </Layout>
    );
};

export default Products;
