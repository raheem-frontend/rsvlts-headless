export const GET_FEATURED_COLLECTIONS = `{
  collections(first: 50) {
    edges {
      node {
        id
        title
        handle
        image {
          altText
          url
        }
        products(first: 4) {
          edges {
            node {
              id
              title
              handle
              description
              featuredImage {
                url
                altText
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              tags
            }
          }
        }
      }
    }
  }
}`;

export const GET_COLLECTION_BY_HANDLE = `
query getCollectionByHandle($handle: String!, $productsCount: Int = 4) {
  collectionByHandle(handle: $handle) {
    id
    title
    description
    handle
    image {
      url
      altText
    }
    products(first: $productsCount) {
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
}
`;

export const GET_COLLECTIONS = `
{
  collections(first: 3) {
    edges {
      node {
        id
        title
        handle
        description
        image {
          url
          altText
        }
        products(first: 3) {
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
    }
  }
}
`;
