import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors, container, headingFamily } from "../theme";

const useStyles = makeStyles({
    section: {
        ...container,
        paddingTop: 48,
        marginTop: 16,
    },
    title: {
        margin: "0 0 24px",
        paddingTop: 24,
        borderTop: `1px solid ${colors.ink}`,
        fontFamily: headingFamily,
        fontSize: "1.75rem",
        fontWeight: 500,
    },
});

type Props = {
    title: string;
    children: React.ReactNode;
};

// A page section: a hairline rule, a heading, then its content.
const Section = ({ title, children }: Props) => {
    const classes = useStyles();
    return (
        <section className={classes.section}>
            <h2 className={classes.title}>{title}</h2>
            {children}
        </section>
    );
};

export default Section;
