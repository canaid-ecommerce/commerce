//import { Money } from './components';
import { Product } from './product';

export type Cart = {
  handle: string;
  totalQuantity: number;
  products: {
    handle: string;
    quantity: number;
    totalAmount: {
      amount: number;
      currencyCode: string;
    };
  }[];
  product: Product;
};

export type StrapiCartOperation = {
  data: {
    cart?: {
      data: {
        id: string;
        attributes: Cart;
      };
    };
  };
  variables: {
    handle: string;
  };
};

export type StrapiCreateCartOperation = {
  data: {
    createCart: {
      data: {
        id: number;
        attributes?: Cart;
      };
    };
    cart: {
      data: {
        id: number;
        attributes?: Cart;
      };
    };
  };
  variables: {
    data?: {};
    slug?: string;
  };
};

export type StrapiAddToCartOperation = {
  data: {
    addToCart: {
      data: {
        id: number;
        attributes?: Cart;
      }
    };
  };
  variables: {
    cartId: string;
    lines: {
      productId: string;
      variantId: string;
      quantity: number;
    }[];
  }
}
