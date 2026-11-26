import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

const query = graphql`
    query ProductGroups {
        allSanityCategory(sort: { order: ASC, fields: title }) {
            edges {
                node {
                    title
                    slug {
                        current
                    }
                    thumbnail {
                        asset {
                            gatsbyImageData(aspectRatio: 1, fit: CROP)
                        }
                    }
                }
            }
        }
        allSanityIndustry(sort: { order: ASC, fields: title }) {
            edges {
                node {
                    title
                    slug {
                        current
                    }
                    thumbnail {
                        asset {
                            gatsbyImageData(aspectRatio: 1, fit: CROP)
                        }
                    }
                }
            }
        }
    }
`;

export type ProductGroup = {
    title: string;
    slug: string;
    image: IGatsbyImageData;
};

// Categories and industries with no image in Sanity are left out.
const toGroups = (edges): ProductGroup[] =>
    edges
        .filter(({ node }) => node.thumbnail?.asset)
        .map(({ node }) => ({
            title: node.title,
            slug: node.slug.current,
            image: node.thumbnail.asset.gatsbyImageData,
        }));

export const useProductGroups = () => {
    const data = useStaticQuery(query);
    return {
        categories: toGroups(data.allSanityCategory.edges),
        industries: toGroups(data.allSanityIndustry.edges),
    };
};
