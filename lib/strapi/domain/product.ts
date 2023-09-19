import { SEO } from './components';

export type Product = {
  id?: number;
  title: string;
  description: string;
  handle: string;
  availableForSale: boolean;
  descriptionHtml: string;
  options: Options[];
  priceRange: PriceRange[];
  SEO: SEO;
  featuredImage: Images;
  images: Images[];
  tags: Tags;
  variants: Variants[];
};

export type Options = {
  id: number;
  name: string;
  values: {
    name: string;
  }[];
};

type PriceRange = {
  amount: number | string;
  currencyCode: string;
  __typename: string;
};

type Images = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

type FeaturedImage = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

type Tags = {
  name: string[];
};

export type Variants = {
  handle: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: SelectedOptions[];
  price: Price;
};

type SelectedOptions = {
  name: string;
  value: string;
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
