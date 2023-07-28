export type Product = {
    id: number;
    title: string;
    description: string;
    handle: string;
    avaliableForSale: number;
    descriptionHtml: string;
    priceRange: PriceRange;
    images: Images;
    featuredImage: FeaturedImage;
};

type PriceRange = {
    amount: number;
    currencyCode: string;
    __typename: string;
};

type Images = {
    url: string;
    altText: string;
    witdth: number;
    height: number;
  };
  
  type FeaturedImage = {
    url: string;
    altText: string;
    witdth: number;
    height: number;
  };