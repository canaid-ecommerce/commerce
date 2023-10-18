import { Cart, StrapiCartOperation, StrapiCreateCartOperation, StrapiRemoveItemToCartOperation, StrapiUpdateCartOperation } from 'lib/strapi/domain/cart';
import { strapiFetch } from '..';
import { createCartMutation, removeItemToCartMutation, updateToCartMutation } from '../mutations/cart';
import { getCartQuery } from '../queries/cart';

export async function getCart(handle: string): Promise<Cart | undefined> {
  const res = await strapiFetch<StrapiCartOperation>({
    query: getCartQuery,
    variables: { handle },
  });

  if (!res.body.data.cart?.data.attributes) {
    return undefined
  };

  return res.body.data.cart.data.attributes
};

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
  };

  return res.body.data.createCart?.data?.attributes;
};

export async function updateToCart(
  cartId: string,
  lines: { productId: string; variantId: string, quantity: number }[]): Promise<Cart | undefined> {
  const res = await strapiFetch<StrapiUpdateCartOperation>({
    query: updateToCartMutation,
    variables: {
      cartId,
      lines
    },
  });

  if (!res.body.data.updateToCart.data.attributes) {
    return undefined
  };

  return res.body.data.updateToCart.data.attributes
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

  return res.body.data.removeItemToCart.data.attributes
}