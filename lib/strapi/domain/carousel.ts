export type Carousel = {
    title: string;
    description: string;
    products: Products;
    SEO: SEO;
    createdAt: string;
    updatedAt: string;
};

type Products = {
  id: number;
  title: string;
  description: string;
  handle: string;
  avaliableForSale: number;
  descriptionHtml: string;
};

type SEO = {
    title: string;
    description: string;
};
  
export type CarouselResponse = {
    collection: {
      data: {
        id: number;
        attributes: {
          items: Carousel;
        };
      };
    };
};
  
export type StrapiCarouselOperation = {
    data: {
      collection?: {
        data: {
          attributes: {
            items: Carousel;
          };
        };
      };
    };
    variables: {
      handle: string;
    };
};