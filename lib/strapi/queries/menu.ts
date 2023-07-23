export const getMenuQuery = `
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