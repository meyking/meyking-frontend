module.exports = {
    siteMetadata: {
        title: "meyking-frontend",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
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
                overlayDrafts: true,
                watchMode: true,
                token : "skHxt2zBjXOBIZTWwtaKvEJjojrggdLaVJap1MELa9ibQjV1FP8ze2XyM2Or9hHxJroXYVw6HbP3SJwRQTAUtAksGvyxvNa7LyxwMw52woTi9QwtZmrZ8uKp4VIRT1uVh1qmBW6V7scjPCMNI74I8QooNN8qgRNVMUsHFLHMlSzxRatlg6An"
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
