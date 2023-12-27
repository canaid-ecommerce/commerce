import { strapiFetch } from '..';
import { Collection, StrapiCollection, StrapiCollectionOperation, StrapiCollectiosnOperation } from '../domain/collection';
import { getCollectionQuery, getCollectionsQuery } from '../queries/collection';

export async function getCollectionProducts(handle: string): Promise<Collection> {
  const res = await strapiFetch<StrapiCollectionOperation>({
    query: getCollectionQuery,
    variables: {
      handle,
      sort: [sortKey]
    }
  });

  if (!res.body?.data?.collection?.data) {
    console.error(`collection ${handle} not found or unpublished`);
  }

  return res.body.data.collection.data.attributes;
}

export async function getCollectionsProducts(): Promise<StrapiCollection[]> {
  const res = await strapiFetch<StrapiCollectiosnOperation>({
    query: getCollectionsQuery,
    variables: {}
  });

  if (!res.body?.data?.collections?.data || res.body.errors) {
    if (res.body.errors) {
      console.error(`getCollectionsProducts error: ${JSON.stringify(res.body.errors)}`);
    }
  };

  return res.body.data.collections.data;
}