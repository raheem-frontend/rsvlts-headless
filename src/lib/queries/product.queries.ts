import { gql } from "@apollo/client";

export const GET_PRODUCTS = `
{
  products(first: 6) {
    edges {
      node {
        id
        title
        handle
        description
        images(first: 1) {
          edges {
            node {
              url
              altText
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`;

export const GET_PRODUCT_BY_HANDLE = gql`
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      description
      vendor
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS_BY_HANDLES = gql`
  query getProductsByHandles($query: String!) {
    products(first: 10, query: $query) {
      edges {
        node {
          id
          handle
          title
          images(first: 1) {
            edges {
              node {
                src
                altText
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          vendor
        }
      }
    }
  }
`;
