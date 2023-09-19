import { Cart, StrapiCreateCartOperation } from 'lib/strapi/domain/cart';
import { strapiFetch } from '..';
import { createCartMutation } from '../mutations/cart';
import { getCartQuery } from '../queries/cart';

export async function createCart(): Promise<Cart> {
  const res = await strapiFetch<StrapiCreateCartOperation>({
    query: createCartMutation,
    cache: 'no-store',
    variables: {
      data: {}
    }
  });

  if (!res.body?.data?.createCart?.data) {
    console.error(`createCart error: `, res);
  }

  return res.body?.data?.createCart?.data?.attributes;
}

export async function getCart(slug: string): Promise<Cart> {
  const res = await strapiFetch<StrapiCreateCartOperation>({
    query: getCartQuery,
    cache: 'no-store',
    variables: {
      slug
    }
  });

  if (!res.body?.data?.cart?.data) {
    console.error(`cart ${slug} not found or unpublished`);
  }

  return res.body?.data?.cart?.data?.attributes;
}
