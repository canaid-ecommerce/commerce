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
        }
      }
    }
  }
}
`;
