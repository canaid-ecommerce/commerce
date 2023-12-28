import { ImageFragment, MoneyFragment, SeoFragment, VariantsFragment } from "./components";

export const ProductFragment = `
fragment product on Product{
  createdAt
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
  images {
    ...image
  }
  SEO {
    ...seo
  }
  variants {
    ...variant
  }
  tags {
    data {
      attributes {
        name
      }
    }
  }
}

${MoneyFragment}
${SeoFragment}
${ImageFragment}
${VariantsFragment}
`;