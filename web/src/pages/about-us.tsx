import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { Layout } from "../layout";
import Section from "../components/Section";
import { ProductGroup, useProductGroups } from "../hooks/useProductGroups";
import {
    colors,
    contact,
    container,
    fontFamily,
    headingFamily,
} from "../theme";

const useStyles = makeStyles({
    page: {
        fontFamily,
        color: colors.ink,
        fontSize: "1.125rem",
        lineHeight: 1.6,
    },
    intro: {
        ...container,
        paddingTop: 64,
        paddingBottom: 16,
        "@media (max-width: 860px)": { paddingTop: 40 },
    },
    headline: {
        margin: 0,
        fontFamily: headingFamily,
        fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
        lineHeight: 1.1,
        fontWeight: 500,
        letterSpacing: "-0.01em",
    },
    lead: {
        margin: "24px 0 0",
        maxWidth: 640,
    },
    links: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        columnCount: 3,
        columnGap: 48,
        "@media (max-width: 860px)": { columnCount: 2 },
        "@media (max-width: 480px)": { columnCount: 1 },
    },
    link: {
        color: colors.brand,
        "&:hover": { color: colors.brandDark },
    },
    address: {
        margin: 0,
        fontStyle: "normal",
    },
});

const About = () => {
    const classes = useStyles();
    const { categories, industries } = useProductGroups();
    const groupLinks = (groups: ProductGroup[], basePath: string) => (
        <ul className={classes.links}>
            {groups.map(({ title, slug }) => (
                <li key={slug}>
                    <Link to={`/${basePath}/${slug}`} className={classes.link}>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    );
    return (
        <Layout>
            <Helmet>
                <html lang="en" />
                <title>About | Meyking</title>
            </Helmet>
            <div className={classes.page}>
                <div className={classes.intro}>
                    <h1 className={classes.headline}>About Meyking</h1>
                    <p className={classes.lead}>
                        Meyking Enterprise supplies custom packaging: bags,
                        boxes, pouches and tissue, made to order. We have
                        worked for companies such as Sephora, Pandora and
                        Michael Kors.
                    </p>
                </div>

                <Section title="Products">
                    {groupLinks(categories, "category")}
                </Section>

                <Section title="Industries">
                    {groupLinks(industries, "industry")}
                </Section>

                <Section title="Head office">
                    <address className={classes.address}>
                        {contact.addressLines.map((line) => (
                            <div key={line}>{line}</div>
                        ))}
                        <a href={contact.mapUrl} className={classes.link}>
                            Google Maps
                        </a>
                        <div>
                            Phone:{" "}
                            <a
                                href={contact.phoneHref}
                                className={classes.link}
                            >
                                {contact.phone}
                            </a>
                        </div>
                        <div>Fax: {contact.fax}</div>
                        <div>
                            Email:{" "}
                            <a
                                href={`mailto:${contact.email}`}
                                className={classes.link}
                            >
                                {contact.email}
                            </a>
                        </div>
                    </address>
                </Section>
            </div>
        </Layout>
    );
};

export default About;
