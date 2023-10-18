'use server';

import { createCart, getCart, removeItemToCart, updateToCart } from 'lib/strapi/services/cart';
import { cookies } from 'next/headers';

export const addItem = async (handle: string, variantId: string): Promise<Error | undefined> => {
  let cartId = cookies().get('cartId')?.value;
  let cart = null;

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    if (cart) {
      cartId = cart.handle;
      cookies().set('cartId', cartId);
    }
  }

  if (!variantId) {
    return new Error('Missing variantId');
  }

  const lines = [
    { productId: handle, variantId: variantId, quantity: 1 },
  ]

  if (!cartId) return new Error('Missing cartId');

  try {
    await updateToCart(cartId, lines);
  } catch (e) {
    return new Error('Error adding item', { cause: e });
  }

  return undefined;
};

export const removeItem = async (productId: string, variantId: string): Promise<Error | undefined> => {
  const cartId = cookies().get('cartId')?.value;

  if (!productId && !variantId) {
    return new Error('Missing cartId');
  }

  if (!cartId) {
    return new Error('Missing cartId');
  }

  try {
    await removeItemToCart({ cartId , productId, variantId });
  } catch (e) {
    return new Error('Error removing item', { cause: e });
  }
};

export const updateItemQuantity = async ({
  productId,
  variantId,
  quantity
}: {
  productId: string;
  variantId: string;
  quantity: number;
}): Promise<Error | undefined> => {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return new Error('Missing cartId');
  }
  try {
    await updateToCart(cartId, [
      {
        productId: productId,
        variantId: variantId,
        quantity,
      }
    ]);
  } catch (e) {
    return new Error('Error updating item quantity', { cause: e });
  }
};
