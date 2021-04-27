import React from 'react'
import {graphql, StaticQuery} from "gatsby"
import { Layout } from '../layout'
const Products = () => {
    return <Layout>Welcome to my humble products</Layout>
}

const query = graphql`
query MyQuery {
    allSanityProduct {
      edges {
        node {
          id
          product
          slug {
            _key
            _type
            current
          }
          thumbnail {
            _key
            _type
            _rawAsset
            _rawHotspot
            _rawCrop
          }
          _createdAt
          _id
          _key
          _rawCategories
          _rawImages
          _rawSlug
          _rawThumbnail
          _rev
          _type
          _updatedAt
          description
          parent {
            id
          }
          images {
            _key
          }
        }
      }
    }
  }
  
  
`

export default () => <StaticQuery render={(data) => {
    return <pre>{JSON.stringify(data,null,2)}</pre>
}} query={query}/>

