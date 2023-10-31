import { ProductFragment } from "../fragments/product";

export const getProductQuery = `
query Product($handle: String!) {
  product(handle: $handle) {
    data {
      id
      attributes {
        ...product
      }
    }
  }
}
${ProductFragment}
`;

export const getProductsQuery = `
query Products {
  products {
    data {
      id
      attributes {
        ...product
      }
    }
  }
}
${ProductFragment}
`;