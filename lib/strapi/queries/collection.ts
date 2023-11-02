import { ProductFragment } from "../fragments/product";

export const getCollectionQuery = `
query getCollectionProducts($handle: String!) {
  collection(handle: $handle) {
    data {
      id
      attributes {
        title
        description
        handle
        SEO {
          ...seo
        }
        createdAt
        updatedAt
        products {
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
${ProductFragment}
`;

export const getCollectionsQuery = `
query getCollections {
  collections {
    data {
      id
      attributes {
        title
        description
        handle
        SEO {
          ...seo
        }
        products {
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
${ProductFragment}
`