export const getProductQuery = `
query getProducts {
    products {
      data {
        id
        attributes {
          title
          description
          handle
          avaliableForSale
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
          tags {
            ... on TagRelationResponseCollection {
              data {
                attributes {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
`;