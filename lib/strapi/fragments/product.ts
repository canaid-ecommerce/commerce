import { ImageFragment, MoneyFragment, SeoFragment, VariantsFragment } from "./components";

export const ProductFragment = `
fragment product on Product{
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
}

${MoneyFragment}
${SeoFragment}
${ImageFragment}
${VariantsFragment}
`;