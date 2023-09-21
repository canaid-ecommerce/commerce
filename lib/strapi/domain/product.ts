import { FeaturedImage, Images, Money, SEO } from './components';

export type Product = {
  id?: number;
  title: string;
  description: string;
  handle: string;
  availableForSale: boolean;
  descriptionHtml: string;
  maxVariantPrice : Money;
  minVariantPrice : null;
  featuredImage : FeaturedImage;
  SEO : SEO;
  images : Images;
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
