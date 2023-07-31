import { SEO } from './components';
import { Product } from './product';

export type Collection = {
  title: string;
  description: string;
  handle: string;
  SEO: SEO;
  products?: {
    data?: {
      id: number;
      attributes?: [Product] | undefined
    }
  };
  createdAt: string;
  updatedAt: string;
};

export type StrapiCollectionOperation = {
  data: {
    collection?: {
      data: {
        id: number;
        attributes: Collection;
      };
    };
  };
  variables: {
    handle: string;
  };
};
