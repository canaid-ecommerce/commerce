import { Cart, StrapiCartOperation, StrapiCreateCartOperation, StrapiRemoveItemToCartOperation, StrapiUpdateCartOperation } from 'lib/strapi/domain/cart';
import { strapiFetch } from '..';
import { createCartMutation, removeItemToCartMutation, updateToCartMutation } from '../mutations/cart';
import { getCartQuery } from '../queries/cart';

export async function getCart(handle: string): Promise<Cart | undefined> {
  const res = await strapiFetch<StrapiCartOperation>({
    query: getCartQuery,
    variables: { handle },
  });

  if (res.body.errors) {
    console.error(`cart error: ${JSON.stringify(res.body.errors)}`);
    return undefined;
  };

  return res.body.data.cart.data.attributes;
};

export async function createCart(): Promise<Cart | undefined> {
  const res = await strapiFetch<StrapiCreateCartOperation>({
    query: createCartMutation,
    cache: 'no-store',
    variables: {
      data: {}
    }
  });

  if (res.body.errors) {
    console.error(`createCart error: ${JSON.stringify(res.body.errors)}`);
    return undefined;
  };

  return res.body.data.createCart?.data?.attributes;
};

export async function updateToCart(
  cartId: string,
  action: 'ADD' | 'REMOVE',
  lines: { productId: string; variantId: string | number, quantity: number }[]): Promise<Cart | undefined> {
  const res = await strapiFetch<StrapiUpdateCartOperation>({
    query: updateToCartMutation,
    variables: {
      cartId,
      lines,
      action
    },
  });

  if (res.body.errors) {
    console.error(`updateToCart error: ${JSON.stringify(res.body.errors)}`);
    return undefined;
  };

  return res.body.data.updateToCart.data.attributes;
};

export async function removeItemToCart({ cartId, productId, variantId }: { cartId: string; productId: string; variantId: string; }): Promise<Cart | undefined> {
  const res = await strapiFetch<StrapiRemoveItemToCartOperation>({
    query: removeItemToCartMutation,
    variables: {
      cartId,
      productId,
      variantId
    },
  });

  if (res.body.errors) {
    console.error(`removeItemToCart error: ${JSON.stringify(res.body.errors)}`);
    return undefined;
  };

  return res.body.data.removeItemToCart.data.attributes
}