import { strapiFetch } from '..';
import { Page, StrapiPageOperation } from '../domain/page';
import { getPageQuery } from '../queries/page';

export async function getPage(handle: string): Promise<Page | undefined> {
  const res = await strapiFetch<StrapiPageOperation>({
    query: getPageQuery,
    variables: {
      handle
    }
  });

  if (!res.body?.data?.page?.data) {
    console.error(`page ${handle} not found or unpublished`)
  }

  return res.body?.data?.page?.data?.attributes;
}
