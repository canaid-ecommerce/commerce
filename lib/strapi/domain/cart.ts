//import { Product } from "./product";

export type Cart = {
  id: string;
  slug : string;
//   checkoutUrl: string;
//   cost: {
//     subtotalAmount: number;
//     totalAmount: number;
//     totalTaxAmount: number;
//   };
//   lines: CartItem;
//   totalQuantity: number;
};

// export type CartItem = {
//     id: string;
//     quantity: number;
//     cost: {
//       totalAmount: Number;
//     };
//     merchandise: {
//       id: string;
//       title: string;
//       selectedOptions: {
//         name: string;
//         value: string;
//       }[];
//       product: Product;
//     };
// };

export type StrapiCreateCartOperation = {
    data: { createCart: { cart: Cart } };
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
