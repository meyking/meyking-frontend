import React from "react";
import { makeStyles } from "@material-ui/styles";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Carousel from "react-grid-carousel";
import UnderlinableLink from "./UnderlinableLink";
import SanityImage from "gatsby-plugin-sanity-image";

const query = graphql`
    query Foo {
        allSanityCarousel {
            edges {
                node {
                    id
                    title
                    thumbnail {
                        asset {
                            gatsbyImageData(aspectRatio : 1,fit: CROP, placeholder: NONE)
                        }
                    }
                    product {
                        id
                        slug {
                            _key
                            _type
                            current
                        }
                    }
                }
            }
        }
    }
`;
const useStyles = makeStyles({
    slideEl: {
        textAlign: "center",
        fontSize: "1.1rem",
        color: "black",
        height: "100%",
        display : "flex",
        flexDirection : "column",
        justifyContent : "flex-end",
        maxWidth : "500px",

    },
    carousel: {
        maxWidth : "95%",
        margin : "auto"
    },
    gatsbyImage: {
        width: "100%",
        maxWidth : "500px",
        minHeight: "35vh",
        display : "flex",
        "& img:hover": {
            cursor: "pointer",
        },
    },
    link: {
        textDecoration: "none",
        cursor: "pointer",
        display: "block",
        zIndex: 1000,
        width: "100%",
    },
    carouselItemContainer : {
        // display : "flex",
        // height : "100%",
        maxWidth : "500px",
        margin : "auto",
    }
});

export default () => {
    const classes = useStyles();
    const data = useStaticQuery(query);
    const images = data.allSanityCarousel.edges.map(({ node }, index) => {
        return (
            <Carousel.Item key={index}>
                <div className={classes.carouselItemContainer}>
                <Link
                    to={`/products/${node.product.slug.current}`}
                    style={{ textDecoration: "none" }}
                    className={classes.link}
                >
                    <div className={classes.slideEl}>
                        <GatsbyImage
                            image={node.thumbnail.asset.gatsbyImageData}
                            className={classes.gatsbyImage}
                            loading="eager"
                            alt={node.title}
                            style={{
                                width : "100%",
                                //objectFit: "cover",
                            }}
                        />
                        <div>{node.title}</div>
                    </div>
                </Link>
            </div>
            </Carousel.Item>
        );
    });
    const responsiveLayout = [
        {
            breakpoint: 800,
            cols: 1,
        },
        {
            breakpoint: 1200,
            cols: 2,
        },
    ];
    return (
        <div className={classes.carousel}>
            <Carousel
                cols={3}
                gap={5}
                row={1}
                loop
                autoplay={6000}
                responsiveLayout={responsiveLayout}
            >
                {images}
            </Carousel>
        </div>
    );
};
