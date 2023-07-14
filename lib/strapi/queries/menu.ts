import { gql } from '@apollo/client';

export const getMenuQuery = gql`
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      data {
        id
        attributes {
          title
          handle
          items {
            title
            path
          }
        }
      }
    }
  }
`;
