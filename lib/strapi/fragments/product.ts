import { ImageFragment, MoneyFragment, SeoFragment } from "./components";

export const ProductFragment = `
fragment product on Product {
    title
    description
    handle
    availableForSale
    descriptionHtml
    maxVariantPrice {
      ...money 
    }
    minVariantPrice {
      ...money
    }
    featuredImage {
      ...image
    }
    SEO {
      ...seo
    }
    images {
      ...image
    }
    ${MoneyFragment}
    ${SeoFragment}
    ${ImageFragment}
}
`;