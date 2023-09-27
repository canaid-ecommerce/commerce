import { Cart, StrapiAddToCartOperation, StrapiCreateCartOperation } from 'lib/strapi/domain/cart';
import { strapiFetch } from '..';
import { addTocartMutation, createCartMutation } from '../mutations/cart';

export async function getCart(cartId: string) {

}

export async function createCart(): Promise<Cart | undefined> {
  const res = await strapiFetch<StrapiCreateCartOperation>({
    query: createCartMutation,
    cache: 'no-store',
    variables: {
      data: {}
    }
  });

  if (!res.body.data.createCart?.data) {
    console.error(`createCart error: ${res.body}`);
  }

  return res.body.data.createCart?.data?.attributes;
};

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]): Promise<Cart> {
  const res = await strapiFetch<StrapiAddToCartOperation>({
    query: addTocartMutation,
    variables: {
      cartId,
      lines
    },
    cache: 'no-store'
  });

  return res.body.data.cartLinesAdd.cart;
};
