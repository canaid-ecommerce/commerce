import { SEO } from './components';

export type Product = {
    title: string;
    description: string;
    handle: string;
    availableForSale: number;
    descriptionHtml: string;
    priceRange: PriceRange;
    SEO: SEO;
    images: Images;
    //featuredImage: FeaturedImage;
    tags : Tags;
};

type PriceRange = {
    amount: number;
    currencyCode: string;
    __typename: string;
};

type Images = {
    url: string;
    altText: string;
    width: number;
    height: number;
};
  
// type FeaturedImage = {
//     url: string;
//     altText: string;
//     width: number;
//     height: number;
// };

type Tags = {
  name : string[]
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