import { SEO } from './components'
import { Product } from './product'

export type Collection = {
  title: string;
  description: string;
  products: [Product];
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
