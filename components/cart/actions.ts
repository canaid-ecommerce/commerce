'use server';

//import { addToCart, createCart, getCart, removeFromCart, updateCart } from 'lib/shopify';
import { removeFromCart } from 'lib/shopify';
import { addToCart, createCart, getCart } from 'lib/strapi/services/cart';
import { cookies } from 'next/headers';

export const addItem = async (handle: string, variantId: string | number): Promise<Error | undefined> => {
  let cartId = cookies().get('cartId')?.value;
  let cart = null;

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    cartId = cart.handle;
    cookies().set('cartId', cartId);
  }

  if (!variantId) {
    return new Error('Missing variantId');
  }

  const Lines = [
    { productId: handle, variantId: variantId , quantity: 1},
  ]

  try {
    await addToCart(cartId, Lines);
    // console.log('addToCart response:', addToCart)

  } catch (e) {
    return new Error('Error adding item', { cause: e });
  }

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
