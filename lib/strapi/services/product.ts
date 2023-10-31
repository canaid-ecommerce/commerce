import { strapiFetch } from '..';
import { Product, StrapiProductOperation, StrapiProductsOperation } from '../domain/product';
import { getProductQuery, getProductsQuery } from '../queries/product';

export async function getProduct(handle: string): Promise<Product> {
  const res = await strapiFetch<StrapiProductOperation>({
    query: getProductQuery,
    variables: {
      handle
    }
  });

  if (!res.body.data.product?.data?.attributes) {
    console.error(`product ${handle} not found or unpublished`);
  }

  return {
    ...(res.body.data.product?.data?.attributes as Product),
    id: res.body.data.product?.data?.id
  };
}

export async function getProducts(): Promise<Product[]> {
  const res = await strapiFetch<StrapiProductsOperation>({
    query: getProductsQuery,
    variables: {
      data: {}
    }
  })
  console.log('GETPRODUCTS', res);

  const productData = res.body.data.products?.data?.attributes;

  if (Array.isArray(productData)) {
    return productData as Product[];
  };

  return []
}