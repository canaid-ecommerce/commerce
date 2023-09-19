export const getCartQuery = `
query getCart($slug: String!) {
  cart(slug: $slug) {
    data {
      id
      attributes {
        slug
        totalQuantity
        lines {
          slug
          quantity
          totalAmount {
            amount
            currencyCode
          }
          merchandise {
            slug
            title
            selectedOptions
            product {
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
                  variants {
                    title
                    availableForSale
                    selectedOptions {
                      name
                      value
                    }
                    price {
                      amount
                      currencyCode
                    }
                  }
                  options {
                    name
                    values {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
