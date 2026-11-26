import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, useStaticQuery } from "gatsby";
import ImageCard from "./ImageCard";

const query = graphql`
    query FeaturedProducts {
        allSanityCarousel {
            edges {
                node {
                    id
                    title
                    thumbnail {
                        asset {
                            gatsbyImageData(
                                aspectRatio: 1
                                fit: CROP
                                width: 480
                                placeholder: NONE
                            )
                        }
                    }
                    product {
                        slug {
                            current
                        }
                    }
                }
            }
        }
    }
`;

const useStyles = makeStyles({
    // A horizontally scrolling row that snaps to each card.
    row: {
        display: "grid",
        gridAutoFlow: "column",
        gridAutoColumns: "minmax(240px, 280px)",
        gap: 20,
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        paddingBottom: 16,
        scrollbarWidth: "thin",
    },
    card: {
        scrollSnapAlign: "start",
    },
});

const FeaturedProducts = () => {
    const classes = useStyles();
    const data = useStaticQuery(query);
    // Slides with no image in Sanity are left out.
    const slides = data.allSanityCarousel.edges.filter(
        ({ node }) => node.thumbnail?.asset
    );
    return (
        <div className={classes.row}>
            {slides.map(({ node }) => (
                <ImageCard
                    key={node.id}
                    to={`/products/${node.product.slug.current}`}
                    title={node.title}
                    image={node.thumbnail.asset.gatsbyImageData}
                    className={classes.card}
                />
            ))}
        </div>
    );
};

export default FeaturedProducts;
