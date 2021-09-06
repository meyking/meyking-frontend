import React from "react";
import { makeStyles } from "@material-ui/styles";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Carousel from "react-grid-carousel";

const query = graphql`
    query Foo {
        allSanityCarousel {
            edges {
                node {
                    id
                    title
                    thumbnail {
                        asset {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    }
`;
const useStyles = makeStyles({
    container: {
        display: "flex",
    },
    image: {
        height: "20vh",
    },
    slideEl: {
        textAlign: "center",
        fontSize: "1.1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "33vh",
    },
    carousel: {
        height: "15vh",
    },
    gatsbyImage: {
        width: "100%",
        minHeight: "20vh",
        "& > img": {
            objectFit: "cover",
        },
    },
});

export default () => {
    const classes = useStyles();
    const data = useStaticQuery(query);
    const images = data.allSanityCarousel.edges.map(({ node }, index) => {
        return (
            <Carousel.Item className={classes.image} key={index}>
                <div className={classes.slideEl}>
                    <GatsbyImage
                        image={node.thumbnail.asset.gatsbyImageData}
                        className={classes.gatsbyImage}
                        alt={node.title}
                    />
                    <div>{node.title}</div>
                </div>
            </Carousel.Item>
        );
    });
    return (
        <div className={classes.carousel}>
            <Carousel cols={3} gap={10} row={1} loop>
                {images}
            </Carousel>
        </div>
    );
};
