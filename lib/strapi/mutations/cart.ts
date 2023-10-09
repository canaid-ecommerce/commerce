import { ProductFragment } from "../fragments/product";

export const createCartMutation = `
mutation createCart($data: CartInput!) {
  createCart(
    data: $data
  ) {
    data {
      id
      attributes {
        handle
      }
    }
  }
}
`
export const addToCartMutation = `
mutation addToCart($cartId: String!, $lines: [CartLineInput!]!) {
  addToCart(cartId: $cartId, lines: $lines) {
    data {
      id
      attributes {
        handle
        totalQuantity
        products {
          handle
          quantity
          totalAmount {
            amount
            currencyCode
          }
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
`
