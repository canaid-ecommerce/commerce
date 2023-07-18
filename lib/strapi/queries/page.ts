import { gql } from '@apollo/client';

export const getPageQuery = gql`
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