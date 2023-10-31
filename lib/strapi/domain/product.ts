import { FeaturedImage, Images, Money, SEO, Variants } from './components';

export type Product = {
  id?: number;
  title: string;
  description: string;
  handle: string;
  availableForSale: boolean;
  descriptionHtml: string;
  maxVariantPrice: Money;
  minVariantPrice: null;
  featuredImage: FeaturedImage;
  SEO: SEO;
  images: Images[];
  variants: Variants[];
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

export type StrapiProductsOperation = {
  data: {
    products?: {
      data: {
        id: number,
        attributes: Product,
      };
    };
  };
  variables: {
    data: {}
  };
};