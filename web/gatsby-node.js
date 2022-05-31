/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
graphqlQuery = `
    query MyQuery {
        allSanityProduct(sort : {order : ASC, fields : product}) {
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
                    industries {
                        title
                    }
                }
            }
        }
        allSanityCategory(sort : {order : ASC, fields : title}){
            edges {
                node {
                    id
                    title
                    slug {
                        current
                    }
                }
            }
        }
        allSanityIndustry(sort : {order : ASC, fields : title}) {
                    edges {
                        node {
                            id
                            title
                            slug {
                                current
                            }
                        }
                    }
                }
    }
`;

const path = require("path");
async function createProductsPage({ data, actions, reporter }) {
    const { createPage } = actions;
    if (data.errors) {
        reporter.panic("Error loading sanity products!", reporter.errors);
    }
    const nodes = data.data.allSanityProduct.edges;
    const productTemplate = path.resolve(`src/templates/ProductPage.tsx`);
    nodes.forEach(({ node }) => {
        if (node.slug === null){
            console.log(node)

        }
    });
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
}

const createTagPages = (tagNodes, productNodes, name, tagKey, createPage) => {
    const tagTemplate = path.resolve(`src/templates/ContainerPage.tsx`);
    const tagMap = {};
    const addProduct = (tag, info) => {
        if (tag in tagMap) {
            tagMap[tag].push(info);
        } else {
            tagMap[tag] = [info];
        }
    };
    console.log("creating tagPages with ", name);
    productNodes.map(({ node }) => {
        const { product } = node;
        const image = node.thumbnail.asset.gatsbyImageData;
        console.log(node);
        const tags = node[tagKey].map((tag) => tag.title);
        const slug = node.slug.current;
        const info = { product, image, slug };
        for (const tag of tags) {
            addProduct(tag, info);
        }
        return info;
    });

    tagNodes.forEach(({ node }) => {
        console.log(node);
        const slug = node.slug.current;
        const { title } = node;
        console.log(`creating slug for ${name}/${slug}`);
        createPage({
            path: `/${name}/${slug}`,
            component: tagTemplate,
            context: {
                name: title,
                products: tagMap[title],
            },
        });
    });
};
async function createAllTagsPages({ data, actions, reporter }) {
    const { createPage } = actions;
    if (data.errors) {
        reporter.panic("Error loading Sanity categories!", reporter.errors);
    }
    const productNodes = data.data.allSanityProduct.edges;
    createTagPages(
        data.data.allSanityCategory.edges,
        productNodes,
        "category",
        "Categories",
        createPage
    );
    createTagPages(
        data.data.allSanityIndustry.edges,
        productNodes,
        "industry",
        "industries",
        createPage
    );
}
// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions, reporter }) => {
    const data = await graphql(graphqlQuery);
    await createProductsPage({ data, actions, reporter });
    await createAllTagsPages({ data, actions, reporter });
};
