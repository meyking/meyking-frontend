import React from "react";
import { graphql, StaticQuery, useStaticQuery } from "gatsby";
import { Layout } from "../layout";
import Image from "gatsby-image";

const query = graphql`
    query MyQuery {
        allSanityProduct {
            edges {
                node {
                    id
                    thumbnail {
                        asset {
                            gatsbyImageData
                        }
                    }
                    product
                }
            }
        }
    }
`;

const Product = ({ product, image }) => {
    return <div>Product: {product}</div>;
};

const Products = () => {
    const data = useStaticQuery(query);
    console.log(data);
    debugger
    const processed = data.allSanityProduct.edges.map(({ node }) => {
        const { product } = node;
        const image = node.thumbnail.asset.gatsbyImageData;
        return { product, image };
    });

    return <Layout>
        Welcome to my humble products
        {processed.map(productData => <Product {...productData}/>)}
    </Layout>;
};

export default Products;
