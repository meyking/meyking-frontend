/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
exports.createPages = async ({ graphql, actions, reporter, createNodeId }) => {
    const { createPage } = actions;
    const data = await graphql(`
        query MyQuery {
            allSanityProduct {
                edges {
                    node {
                        id
                        thumbnail {
                            asset {
                                gatsbyImageData(aspectRatio: 1, fit: CROP)
                            }
                        }
                        product
                        _rawDescription
                        images {
                            asset {
                                gatsbyImageData(aspectRatio: 1, fit: CROP)
                            }
                        }
                        slug {
                            current
                        }
                        Categories {
                            title
                        }
                    }
                }
            }
        }
    `);
    if (data.errors) {
        reporter.panic("Error loading stripe products!", reporter.errors);
    }
    const nodes = data.data.allSanityProduct.edges;
    const productTemplate = path.resolve(`src/templates/ProductPage.tsx`);

    nodes.forEach(({ node }) => {
        console.log(node);
        const slug = node.slug.current;
        console.log(`creating slug for ${slug}`);
        createPage({
            path: `/products/${slug}`,
            component: productTemplate,
            context: {
                ...node,
                slug: slug,
            },
        });
    });
};
