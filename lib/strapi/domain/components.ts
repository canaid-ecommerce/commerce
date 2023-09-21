export type Money = {
  amount : number;
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