import { SEO } from './components';

export type Product = {
  id?: number;
  title: string;
  description: string;
  handle: string;
  availableForSale: number;
  descriptionHtml: string;
  priceRange: PriceRange;
  SEO: SEO;
  images: Images;
  //featuredImage: FeaturedImage;
  tags: Tags;
  variants: Variants; 
};

type PriceRange = {
  amount: number;
  currencyCode: string;
  __typename: string;
};

type Images = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

// type FeaturedImage = {
//     url: string;
//     altText: string;
//     width: number;
//     height: number;
// };

type Tags = {
  name: string[]
};

type Variants = {
  title: string;
  availableForSale: boolean;
  selectedOptions: SelectedOptions;
  price: Price;
};

type SelectedOptions = {
  name: string;
  value: number;
};

type Price = {
  amount: number;
  currencyCode: string;
};

export type StrapiProductOperation = {
  data: {
    product?: {
      data: {
        id: number;
        attributes: Product;
      };
    };
  };
  variables: {
    handle: string;
  };
};