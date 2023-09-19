'use server';

import { addToCart, createCart, getCart, removeFromCart, updateCart } from 'lib/shopify';
import { createCart as createCart2, getCart as getCart2 } from 'lib/strapi/services/cart';
import { cookies } from 'next/headers';

export const addItem = async (variantId: string | undefined): Promise<Error | undefined> => {
  let cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart2(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart2();
    cartId = cart?.slug;
    cookies().set('cartId', cartId);
  }

  console.log(cart);

  // if (!variantId) {
  //   return new Error('Missing variantId');
  // }
  // try {
  //   await addToCart(cartId, [{ merchandiseId: variantId, quantity: 1 }]);
  // } catch (e) {
  //   return new Error('Error adding item', { cause: e });
  // }
  return undefined;
};

export const removeItem = async (lineId: string): Promise<Error | undefined> => {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return new Error('Missing cartId');
  }
  try {
    await removeFromCart(cartId, [lineId]);
  } catch (e) {
    return new Error('Error removing item', { cause: e });
  }
};

export const updateItemQuantity = async ({
  lineId,
  variantId,
  quantity
}: {
  lineId: string;
  variantId: string;
  quantity: number;
}): Promise<Error | undefined> => {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return new Error('Missing cartId');
  }
  try {
    await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity
      }
    ]);
  } catch (e) {
    return new Error('Error updating item quantity', { cause: e });
  }
};
