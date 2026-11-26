import React from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import { Layout } from "../layout";
import ButtonLink from "../components/ButtonLink";
import CategoryGrid from "../components/CategoryGrid";
import FeaturedProducts from "../components/FeaturedProducts";
import { colors, contact, container, fontFamily } from "../theme";

const NARROW = "@media (max-width: 860px)";

const useStyles = makeStyles({
    page: {
        fontFamily,
        color: colors.ink,
    },
    container,
    hero: {
        background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.surface} 100%)`,
    },
    heroInner: {
        ...container,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: 48,
        padding: "88px 24px 96px",
        [NARROW]: {
            gridTemplateColumns: "1fr",
            gap: 32,
            padding: "48px 24px 56px",
        },
    },
    eyebrow: {
        color: colors.brand,
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
    },
    headline: {
        margin: "16px 0 0",
        fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
        lineHeight: 1.05,
        fontWeight: 700,
        letterSpacing: "-0.03em",
    },
    lead: {
        margin: "20px 0 0",
        maxWidth: 460,
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
    clients: {
        borderTop: `1px solid ${colors.line}`,
        borderBottom: `1px solid ${colors.line}`,
    },
    clientsInner: {
        ...container,
        padding: "28px 24px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px 48px",
    },
    clientsLabel: {
        color: colors.muted,
        fontSize: "0.85rem",
        [NARROW]: { width: "100%", textAlign: "center" },
    },
    client: {
        fontSize: "1rem",
        fontWeight: 600,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
    },
    section: {
        ...container,
        paddingTop: 88,
        [NARROW]: { paddingTop: 56 },
    },
    sectionHeader: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
        marginBottom: 32,
    },
    sectionTitle: {
        margin: 0,
        fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
        fontWeight: 700,
        letterSpacing: "-0.02em",
    },
    sectionText: {
        margin: "8px 0 0",
        color: colors.muted,
    },
    cta: {
        marginTop: 88,
        borderRadius: 24,
        background: colors.ink,
        color: colors.white,
        padding: "56px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 32,
        [NARROW]: { marginTop: 56, padding: "40px 24px" },
    },
    ctaTitle: {
        margin: 0,
        fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
        fontWeight: 700,
        letterSpacing: "-0.02em",
    },
    ctaText: {
        margin: "12px 0 0",
        color: "rgba(255,255,255,0.72)",
        "& a": { color: colors.white },
    },
});

const clients = ["Sephora", "Pandora", "Michael Kors"];

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
                    <div className={classes.heroInner}>
                        <div>
                            <div className={classes.eyebrow}>
                                Meyking Enterprise
                            </div>
                            <h1 className={classes.headline}>
                                Custom packaging for retail and luxury brands
                            </h1>
                            <p className={classes.lead}>
                                Bags, boxes and pouches made to your
                                specifications, from a single supplier.
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
                    </div>
                </section>

                <section className={classes.clients}>
                    <div className={classes.clientsInner}>
                        <span className={classes.clientsLabel}>
                            We have worked with
                        </span>
                        {clients.map((client) => (
                            <span key={client} className={classes.client}>
                                {client}
                            </span>
                        ))}
                    </div>
                </section>

                <section className={classes.section}>
                    <div className={classes.sectionHeader}>
                        <div>
                            <h2 className={classes.sectionTitle}>
                                Shop by category
                            </h2>
                            <p className={classes.sectionText}>
                                Every item can be customised with your sizes,
                                materials and branding.
                            </p>
                        </div>
                        <ButtonLink to="/products" variant="secondary">
                            View all products
                        </ButtonLink>
                    </div>
                    <CategoryGrid />
                </section>

                <section className={classes.section}>
                    <div className={classes.sectionHeader}>
                        <h2 className={classes.sectionTitle}>
                            Featured products
                        </h2>
                    </div>
                    <FeaturedProducts />
                </section>

                <div className={classes.container}>
                    <section className={classes.cta}>
                        <div>
                            <h2 className={classes.ctaTitle}>
                                Have a packaging project in mind?
                            </h2>
                            <p className={classes.ctaText}>
                                Tell us what you need, or call{" "}
                                <a href={contact.phoneHref}>{contact.phone}</a>.
                            </p>
                        </div>
                        <ButtonLink to="/contact-us" variant="onDark">
                            Request a quote
                        </ButtonLink>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
