import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import { useProductGroups } from "../hooks/useProductGroups";
import { colors } from "../theme";

const useStyles = makeStyles({
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 20,
        "@media (max-width: 1100px)": {
            gridTemplateColumns: "repeat(3, 1fr)",
        },
        "@media (max-width: 640px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 12,
        },
    },
    tile: {
        position: "relative",
        display: "block",
        borderRadius: 16,
        overflow: "hidden",
        background: colors.surface,
        color: colors.white,
        textDecoration: "none",
        "&:hover $image": { transform: "scale(1.05)" },
    },
    image: {
        display: "block",
        transition: "transform 400ms ease",
    },
    label: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: "48px 16px 14px",
        fontWeight: 600,
        fontSize: "1rem",
        background:
            "linear-gradient(to top, rgba(20,32,43,0.78), rgba(20,32,43,0))",
    },
});

const CategoryGrid = () => {
    const classes = useStyles();
    const { categories } = useProductGroups();
    return (
        <div className={classes.grid}>
            {categories.map(({ title, slug, image }) => (
                <Link
                    key={slug}
                    to={`/category/${slug}`}
                    className={classes.tile}
                >
                    <GatsbyImage
                        image={image}
                        alt=""
                        className={classes.image}
                    />
                    <div className={classes.label}>{title}</div>
                </Link>
            ))}
        </div>
    );
};

export default CategoryGrid;
