import { ProductFragment } from "../fragments/product";

export const getCartQuery = `
query getCart($handle: String!) {
  cart(handle: $handle) {
    data {
      id
      attributes {
        totalQuantity
        handle
        products {
          quantity
          handle
          totalAmount {
            amount
            currencyCode
          }
          variant
          product {
            data {
              id
              attributes {
                ...product
              }
            }
          }
        }
      }
    }
  }
}
${ProductFragment}
`;
