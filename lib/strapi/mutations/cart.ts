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
export const updateToCartMutation = `
mutation updateToCart($cartId: String!, $lines: [CartLineInput!]!) {
  updateToCart(cartId: $cartId, lines: $lines) {
    data {
      id
      attributes {
        handle
        totalQuantity
        totalAmount {
          amount
          currencyCode
        }
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

export const removeItemToCartMutation = `
mutation removeItemToCart($cartId: String!, $productId: String!, $variantId: String!) {
  removeItemToCart(cartId: $cartId, productId: $productId, variantId: $variantId) {
    data {
      id
      attributes {
        handle
        totalQuantity
        totalAmount {
          amount
          currencyCode
        }
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