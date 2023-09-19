export const createCartMutation = `
mutation createCart($data: CartInput!) {
    createCart(
      data: $data
    ) {
      data {
        id
        attributes {
          slug
        }
      }
    }
}
`
export const addTocartMutation = `
mutation addToCart($cartId: String!, $lines: [CartLineInput!]!) {
  addToCart(
    cartId: $cartId,
    lines: $lines
  ) {
    data {
      id
      attributes {
        slug
      }
    }
  }
}
`