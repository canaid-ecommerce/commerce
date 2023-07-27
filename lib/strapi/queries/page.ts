export const getPageQuery = `
  query getPage($handle: String!) {
    page(handle: $handle) {
      data {
        id
        attributes {
          title
          handle
          body
          bodySummary
          SEO {
            title
            description
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
