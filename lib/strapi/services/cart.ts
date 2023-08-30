import { Cart, StrapiCreateCartOperation } from 'lib/strapi/domain/cart';
import { strapiFetch } from '..';
import { createCartMutation } from '../mutations/cart';

export async function createCart(): Promise<Cart> {
    const res = await strapiFetch<StrapiCreateCartOperation>({
      query: createCartMutation,
      cache: 'no-store'
    });

    console.log(res)
  
    return res.body.data.createCart.cart;
}