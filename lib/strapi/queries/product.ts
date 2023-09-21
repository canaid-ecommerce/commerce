import { ImageFragment, MoneyFragment, SeoFragment } from "../fragments/components";
import { ProductFragment } from "../fragments/product";

export const getProductQuery = `
query Product($handle: String!) {
  product(handle: $handle) {
    data {
      id
      attributes {
        ...product
      }
    }
  }
}
${ProductFragment}
`;
