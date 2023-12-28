import { FeaturedImage, Images, Money, SEO, Tags, Variants } from './components';

export type Product = {
  id?: number;
  title: string;
  description: string;
  handle: string;
  availableForSale: boolean;
  descriptionHtml: string;
  maxVariantPrice: Money;
  minVariantPrice: Money;
  featuredImage: FeaturedImage;
  SEO: SEO;
  images: Images[];
  variants: Variants[];
  tags: Tags[];
};

export type StrapiProduct = {
  id: number;
  attributes: Product;
};

export type StrapiProductOperation = {
  data: {
    product: {
      data: StrapiProduct;
    };
  };
  errors?: unknown;
  variables: {
    handle: string;
  };
};

export type StrapiProductsOperation = {
  data: {
    products: {
      data: StrapiProduct[];
    };
  };
  errors?: unknown;
  variables: {
    searchValue?: string,
    sort: string[]
  };
};

export type StrapiProductRecommendationsOperation = {
  data: {
    products: {
      data: {
        id: number,
        attributes: Product,
      }[];
    };
  };
  errors?: unknown
  variables: {
    tags: string[];
  };
};