export const CREATE_CART = `
    mutation {
      cartCreate {
        cart {
          id
          checkoutUrl
          lines(first: 5) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  `;


  export const ADD_TO_CART= `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          lines(first: 10) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                    }
                    product {
                      title
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