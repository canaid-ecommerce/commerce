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
`;
