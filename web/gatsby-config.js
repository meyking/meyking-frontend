module.exports = {
    siteMetadata: {
        title: "meyking-frontend",
    },
    plugins: [
        "gatsby-plugin-image",
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                disableAutoprefixing: true,
                disableMinification: true,
            },
        },
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/logo.png",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-typescript",
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: "qa4hnhox",
                dataset: "production",
                watchMode: true,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
