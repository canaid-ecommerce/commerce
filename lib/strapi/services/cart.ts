import { Cart, StrapiAddToCartOperation, StrapiCartOperation, StrapiCreateCartOperation } from 'lib/strapi/domain/cart';
import { strapiFetch } from '..';
import { addToCartMutation, createCartMutation } from '../mutations/cart';
import { getCartQuery } from '../queries/cart';

export async function getCart(handle: string): Promise<Cart | undefined> {
  const res= await strapiFetch<StrapiCartOperation>({
    query: getCartQuery,
    variables: {handle},
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

export async function addToCart(
  cartId: string,
  lines: { productId: string; variantId: string, quantity: number}[]): Promise<Cart | undefined> {
  console.log('addToCart query:', addToCartMutation)
  const res = await strapiFetch<StrapiAddToCartOperation>({
    query: addToCartMutation,
    variables: {
      cartId,
      lines
    },
  });  

  console.log('AddtoCart', res)

  if (!res.body.data.addToCart.data.attributes) {
    return undefined
  };
    
  return res.body.data.addToCart.data.attributes
};
