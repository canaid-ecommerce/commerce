export type Page = {
    title: string;
    handle: string;
    body: string;
    bodySummary: string;
    SEO: SEO;
    createdAt: string;
    updatedAt: string;
};

type SEO = {
    title: string;
    description: string;
};
  
export type PageResponse = {
    page: {
      data: {
        id: number;
        attributes: Page;
      };
    };
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