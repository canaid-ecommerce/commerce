import { strapiFetch } from '..';
import { Collection, StrapiCollectionOperation } from '../domain/collection';
import { getCollectionQuery } from '../queries/collection';

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
