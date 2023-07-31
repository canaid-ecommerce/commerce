import { SEO } from './components'
import { Product } from './product'

export type Collection = {
  title: string;
  description: string;
  products?: {
    data?: {
      id: number;
      attributes?: [Product] | undefined
    }
  };
  SEO: SEO;
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
