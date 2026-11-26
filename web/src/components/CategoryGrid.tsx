import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useProductGroups } from "../hooks/useProductGroups";
import ImageCard from "./ImageCard";

const useStyles = makeStyles({
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "32px 20px",
        "@media (max-width: 1100px)": {
            gridTemplateColumns: "repeat(3, 1fr)",
        },
        "@media (max-width: 640px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px 12px",
        },
    },
});

const CategoryGrid = () => {
    const classes = useStyles();
    const { categories } = useProductGroups();
    return (
        <div className={classes.grid}>
            {categories.map(({ title, slug, image }) => (
                <ImageCard
                    key={slug}
                    to={`/category/${slug}`}
                    title={title}
                    image={image}
                />
            ))}
        </div>
    );
};

export default CategoryGrid;
