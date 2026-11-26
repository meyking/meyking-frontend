import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../theme";

const useStyles = makeStyles({
    card: {
        display: "block",
        textDecoration: "none",
        color: colors.ink,
        "&:hover $title": { textDecoration: "underline" },
    },
    image: {
        display: "block",
        background: colors.surface,
    },
    title: {
        marginTop: 12,
        fontWeight: 500,
        fontSize: "1rem",
    },
});

type Props = {
    to: string;
    title: string;
    image: IGatsbyImageData;
    className?: string;
};

// A square image with its name underneath, linking to a category or product.
const ImageCard = ({ to, title, image, className }: Props) => {
    const classes = useStyles();
    return (
        <Link to={to} className={[classes.card, className].filter(Boolean).join(" ")}>
            <GatsbyImage image={image} alt="" className={classes.image} />
            <div className={classes.title}>{title}</div>
        </Link>
    );
};

export default ImageCard;
