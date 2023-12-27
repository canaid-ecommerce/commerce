import { strapiFetch } from '..';
import { Product, StrapiProductOperation, StrapiProductRecommendationsOperation, StrapiProductsOperation } from '../domain/product';
import { getProductQuery, getProductRecommendationsQuery, getProductsQuery } from '../queries/product';

export async function getProduct(handle: string): Promise<Product> {
  const res = await strapiFetch<StrapiProductOperation>({
    query: getProductQuery,
    variables: {
      handle
    }
  });

  if (!res.body.data.product.data || res.body.errors) {
    if (res.body.errors) {
      console.error(`getProduct error: ${JSON.stringify(res.body.errors)}`);
    }
  };

  return {
    ...(res.body.data.product?.data?.attributes as Product),
    id: res.body.data.product?.data?.id
  };
}

export async function getProducts({ searchValue, sortKey }: {
  searchValue?: string;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await strapiFetch<StrapiProductsOperation>({
    query: getProductsQuery,
    variables: {
      searchValue,
      sort: [sortKey]
    }
  });

  if (!res.body.data.products.data || res.body.errors) {
    if (res.body.errors) {
      console.error(`getProducts error: ${JSON.stringify(res.body.errors)}`);
    }
  };

  return res.body.data.products.data;
};

export async function getProductRecommendations(tags: string[]): Promise<Product[]> {
  const res = await strapiFetch<StrapiProductRecommendationsOperation>({
    query: getProductRecommendationsQuery,
    variables: {
      tags,
    }
  });

  if (!res.body.data || !res.body.data.products || !res.body.data.products.data || res.body.errors) {
    if (res.body.errors) {
      console.error(`getProductRecommendations error: ${JSON.stringify(res.body.errors)}`);
    }
  };

  return res.body.data?.products?.data;
};