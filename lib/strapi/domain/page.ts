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
        id: 1;
        attributes: Page;
      };
    };
  };