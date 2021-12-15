/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
graphqlQuery = `
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
        allSanityCategory {
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
async function createProductsPage({ data, graphql, actions, reporter }) {
    const { createPage } = actions;
    if (data.errors) {
        reporter.panic("Error loading sanity products!", reporter.errors);
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
}

async function createCategoryPage({ data, actions, reporter }) {
    const { createPage } = actions;
    if (data.errors) {
        reporter.panic("Error loading Sanity categories!", reporter.errors);
    }
    const nodes = data.data.allSanityCategory.edges;
    const categoryTemplate = path.resolve(`src/templates/CategoryPage.tsx`);
    const categoryMap = {}
    const addProduct = (category,info) => {
        if (category in categoryMap){
            categoryMap[category].push(info)
        } else {
            categoryMap[category] = [info]
        }
    }
    const processedProducts = data.data.allSanityProduct.edges.map(({ node }) => {
        const { product } = node;
        const image = node.thumbnail.asset.gatsbyImageData;
        const categories = node.Categories.map((category) => category.title);
        const slug = node.slug.current;
        const info = { product, image, categories, slug }
        for (const category of categories){
            addProduct(category,info)
        }
        return info;
    });

    nodes.forEach(({ node }) => {
        console.log(node);
        const slug = node.slug.current;
        const {title} = node
        console.log(`creating slug for category/${slug}`);
        createPage({
            path: `/category/${slug}`,
            component: categoryTemplate,
            context: {
                category: title,
                products : categoryMap[title]
            },
        });
    });
}
// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions, reporter }) => {
    const data = await graphql(graphqlQuery);
    await createProductsPage({ data, actions, reporter });
    await createCategoryPage({ data, actions, reporter });
};
