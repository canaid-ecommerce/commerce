import { Product } from './product';

export type Cart = {
  id: string;
  slug: string;
  totalQuantity: number;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: CartItem[];
};

export type CartItem = {
  id: string;
  slug: string;
  quantity: number;
  totalAmount: Money;
  merchandise: {
    id: string;
    title: string;
    slug: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: Product;
  };
};

export type Money = {
  amount: string;
  currencyCode: string;
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
    cartLinesAdd: {
      cart: Cart
    };
  };
  variables: {
    cartId: string;
    lines: {
      merchandiseId: string;
      quantity: number;
    }[];
  }
}
