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
query Products($searchValue: String, $sort: [String]) {
  products(
    filters: {
      or: [
        { title: { containsi: $searchValue } }
        { description: { containsi: $searchValue } }
      ]
    }
    sort: $sort
  ) {
    data {
      id
      attributes {
        createdAt
        ...product
      }
    }
  }
}
${ProductFragment}
`;

export const getProductRecommendationsQuery = `
query Products($tags: [String!]) {
  products(filters: { and: [{ tags: { name: { in: $tags } } }] })  {
    data {
      id
      attributes {
        ...product
        tags {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
  ${ProductFragment}
`;