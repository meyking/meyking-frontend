import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { colors } from "../theme";

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
        gap: 24,
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        paddingBottom: 16,
        scrollbarWidth: "thin",
    },
    card: {
        scrollSnapAlign: "start",
        textDecoration: "none",
        color: colors.ink,
        "&:hover $image": { transform: "scale(1.04)" },
    },
    frame: {
        borderRadius: 16,
        overflow: "hidden",
        background: colors.surface,
    },
    image: {
        display: "block",
        transition: "transform 400ms ease",
    },
    title: {
        marginTop: 14,
        fontWeight: 600,
        fontSize: "1rem",
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
                <Link
                    key={node.id}
                    to={`/products/${node.product.slug.current}`}
                    className={classes.card}
                >
                    <div className={classes.frame}>
                        <GatsbyImage
                            image={node.thumbnail.asset.gatsbyImageData}
                            alt={node.title}
                            className={classes.image}
                        />
                    </div>
                    <div className={classes.title}>{node.title}</div>
                </Link>
            ))}
        </div>
    );
};

export default FeaturedProducts;
