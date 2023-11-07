import { strapiFetch } from '..';
import { Collection, StrapiCollectionOperation, StrapiCollectiosnOperation } from '../domain/collection';
import { getCollectionQuery, getCollectionsQuery } from '../queries/collection';

export async function getCollectionProducts(handle: string): Promise<Collection | undefined> {
  const res = await strapiFetch<StrapiCollectionOperation>({
    query: getCollectionQuery,
    variables: {
      handle
    }
  });

  if (!res.body?.data?.collection?.data) {
    console.error(`collection ${handle} not found or unpublished`);
  }

  return res.body?.data?.collection?.data?.attributes;
}

export async function getCollectionsProducts(): Promise<Collection[]> {
  const res = await strapiFetch<StrapiCollectiosnOperation>({
    query: getCollectionsQuery,
    variables: {
      data: {}
    }
  });

  if (!res.body?.data?.collections?.data || res.body.errors) {
    if (res.body.errors) {
      console.error(`getCollectionsProducts error: ${JSON.stringify(res.body.errors)}`);
    }
  };

  return res.body?.data?.collections?.data;
}