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
          title
          description
        }
        products {
          data {
            id
            attributes {
              title
              description
              handle
              availableForSale
              descriptionHtml
              priceRange {
                ... on ComponentItemsMaxVariantPrice {
                  amount
                  currencyCode
                  __typename
                }
                ... on ComponentItemsMinVariantPrice {
                  amount
                  currencyCode
                  __typename
                }
              }
              SEO {
                title
                description
              }
              images {
                url
                altText
                width
                height
              }
              featuredImage {
                url
                altText
                width
                height
              }
            }
          }
        }
      }
    }
  }
}
`;