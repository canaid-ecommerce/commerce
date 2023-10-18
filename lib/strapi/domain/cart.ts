import { Money } from './components';
import { Product } from './product';

export type Cart = {
  handle: string;
  totalQuantity: number;
  totalAmount: Money;
  products: CartProduct[];
};

export type CartProduct = {
  handle: string;
  quantity: number;
  totalAmount: Money;
  product: {
    data: {
      attributes: Product;
    }
  };
  variant: {
    id: number;
    handle: string;
    availableForSale: boolean;
    title: string;
  };
}

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

export type StrapiUpdateCartOperation = {
  data: {
    updateToCart: {
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
  };
};

export type StrapiRemoveItemToCartOperation = {
  data: {
    removeItemToCart: {
      data: {
        id: number
        attributes?: Cart;
      }
    };
  };
  variables: {
    cartId: string;
    productId: string;
    variantId: string;
  };
};