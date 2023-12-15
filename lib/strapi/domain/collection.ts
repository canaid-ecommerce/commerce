import { SEO } from './components';
import { Product } from './product';

export type Collection = {
  title: string;
  description?: string;
  slug?: string;
  handle?: string;
  SEO?: SEO;
  products?: {
    data: {
      id: number;
      attributes: Product;
    }[];
  };
  createdAt?: string;
  updatedAt?: string;
};

export type StrapiCollection = {
  id: number;
  slug?: string;
  title?: string;
  attributes: Collection;
};

export type StrapiCollectionOperation = {
  data: {
    collection: {
      data: StrapiCollection;
    };
  };
  variables: {
    handle: string;
  };
};

export type StrapiCollectiosnOperation = {
  data: {
    collections: {
      data: StrapiCollection[];
    };
  };
  errors?: unknown;
  variables: {};
};