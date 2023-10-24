'use server';

import { createCart, getCart, removeItemToCart, updateToCart } from 'lib/strapi/services/cart';
import { cookies } from 'next/headers';

export const addOrUpdateItem = async (handle: string, variantId: string | number, type: 'ADD' | 'REMOVE'): Promise<Error | undefined> => {
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

  if (!cartId) return new Error('Missing cartId');

  const action: 'ADD' | 'REMOVE' = type === 'ADD' ? 'ADD' : 'REMOVE';
  const lines = [
    { productId: handle, variantId: variantId, quantity: 1 },
  ];

  try {
    await updateToCart(cartId, action, lines);
  } catch (e) {
    // TODO: error refactor
    console.error('Error updating cart:', e);
    return new Error('Error updating cart');
  }

  return undefined;
};

export const removeItem = async (productId: string, variantId: string,): Promise<Error | undefined> => {
  const cartId = cookies().get('cartId')?.value;

  if (!productId && !variantId) {
    return new Error('Missing cartId');
  }

  if (!cartId) {
    return new Error('Missing cartId');
  }

  try {
    await removeItemToCart({ cartId, productId, variantId });
  } catch (e) {
    return new Error('Error removing item', { cause: e });
  }
};