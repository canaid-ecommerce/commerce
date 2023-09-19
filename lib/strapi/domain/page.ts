import { SEO } from './components';

export type Page = {
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  SEO: SEO;
  createdAt: string;
  updatedAt: string;
};

export type StrapiPageOperation = {
  data: {
    page?: {
      data: {
        attributes: Page;
      };
    };
  };
  variables: {
    handle: string;
  };
};
