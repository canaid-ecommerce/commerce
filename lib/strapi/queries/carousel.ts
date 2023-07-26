export const getCarouselQuery = `
query collection($handle: String!) {
  collection(handle: $handle) {
   data {
    id
    attributes {
      title
      description
      handle
        products{
          data {
          id
          attributes {
            title
            description
            handle
            avaliableForSale
            descriptionHtml
          }
        }
      }
        SEO{
              title
              description
              }
          createdAt
          updatedAt
          }
      }
}
}
`