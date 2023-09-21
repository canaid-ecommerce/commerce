import { strapiFetch } from '..';
import { Product, StrapiProductOperation } from '../domain/product';
import { getProductQuery } from '../queries/product';

export async function getProduct(handle: string): Promise<Product> {
  const res = await strapiFetch<StrapiProductOperation>({
    query: getProductQuery,
    variables: {
      handle
    }
  });

  console.log("res", res);

  if (!res.body.data.product?.data?.attributes) {
    console.error(`product ${handle} not found or unpublished`);
  }

  return {
    ...(res.body.data.product?.data?.attributes as Product),
    id: res.body.data.product?.data?.id
  };
}
