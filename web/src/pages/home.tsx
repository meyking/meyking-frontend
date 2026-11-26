import React from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import { Layout } from "../layout";
import ButtonLink from "../components/ButtonLink";
import CategoryGrid from "../components/CategoryGrid";
import FeaturedProducts from "../components/FeaturedProducts";
import Section from "../components/Section";
import {
    colors,
    contact,
    container,
    fontFamily,
    headingFamily,
} from "../theme";

const NARROW = "@media (max-width: 860px)";

const useStyles = makeStyles({
    page: {
        fontFamily,
        color: colors.ink,
    },
    hero: {
        ...container,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: 48,
        paddingTop: 64,
        paddingBottom: 64,
        [NARROW]: {
            gridTemplateColumns: "1fr",
            gap: 32,
            paddingTop: 40,
            paddingBottom: 40,
        },
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
        margin: "20px 0 0",
        maxWidth: 440,
        color: colors.muted,
        fontSize: "1.125rem",
        lineHeight: 1.6,
    },
    actions: {
        marginTop: 32,
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
    },
    textLink: {
        color: colors.brand,
        "&:hover": { color: colors.brandDark },
    },
    quote: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        [NARROW]: { gridTemplateColumns: "1fr", gap: 24 },
    },
    quoteText: {
        margin: 0,
        maxWidth: 440,
        fontSize: "1.125rem",
        lineHeight: 1.6,
    },
});

const Home = () => {
    const classes = useStyles();
    return (
        <Layout>
            <Helmet>
                <html lang="en" />
                <title>Meyking | Custom packaging</title>
            </Helmet>
            <div className={classes.page}>
                <section className={classes.hero}>
                    <div>
                        <h1 className={classes.headline}>
                            Custom packaging for retail and luxury brands
                        </h1>
                        <p className={classes.lead}>
                            Bags, boxes and pouches, made to order. We have
                            worked for Sephora, Pandora and Michael Kors.
                        </p>
                        <div className={classes.actions}>
                            <ButtonLink to="/contact-us" variant="primary">
                                Request a quote
                            </ButtonLink>
                            <ButtonLink to="/products" variant="secondary">
                                Browse products
                            </ButtonLink>
                        </div>
                    </div>
                    <StaticImage
                        src="../images/hero-image.png"
                        alt="Gold and black gift boxes tied with ribbon"
                        placeholder="none"
                        loading="eager"
                    />
                </section>

                <Section title="Categories">
                    <CategoryGrid />
                </Section>

                <Section title="Featured products">
                    <FeaturedProducts />
                </Section>

                <Section title="Quotes">
                    <div className={classes.quote}>
                        <p className={classes.quoteText}>
                            Call{" "}
                            <a
                                href={contact.phoneHref}
                                className={classes.textLink}
                            >
                                {contact.phone}
                            </a>{" "}
                            or email{" "}
                            <a
                                href={`mailto:${contact.email}`}
                                className={classes.textLink}
                            >
                                {contact.email}
                            </a>
                            .
                        </p>
                        <div>
                            <ButtonLink to="/contact-us" variant="secondary">
                                Contact form
                            </ButtonLink>
                        </div>
                    </div>
                </Section>
            </div>
        </Layout>
    );
};

export default Home;
