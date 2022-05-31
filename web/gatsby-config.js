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
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                defaults: {
                    formats: ['auto'],
                    placeholder: 'blurred',
                    quality: 100,
                    breakpoints: [640, 800, 1200, 1920]
                },

            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-typescript",
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: "qa4hnhox",
                dataset: "production",
            },
        },
        {
            resolve: "gatsby-plugin-sanity-image",
            options: {
                projectId: "qa4hnhox",
                dataset: "production",
            },
            defaultImageConfig: {
                quality: 100,
                fit: "max",
                auto: "format",
                dpr: 3,
            }
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
