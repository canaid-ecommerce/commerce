export type Money = {
  amount: number;
  currencyCode: string;
}

export type FeaturedImage = {
  url: string;
  altText: string;
  width: number;
  height: number;
  handle: string;
};

export type SEO = {
  title: string;
  description: string;
};

export type Images = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Options = {
  id: number;
  name: string;
  values: {
    name: string;
  }[];
};

export type PriceRange = {
  amount: number | string;
  currencyCode: string;
  __typename: string;
};

export type Tags = {
  name: string[];
};

export type Variants = {
  id: number;
  title: string;
  handle: string;
  availableForSale: boolean;
  maxPrice: Money;
  minPrice: Money;
  options: SelectedOptions[];
};

type SelectedOptions = {
  title: string;
  value: string;
};