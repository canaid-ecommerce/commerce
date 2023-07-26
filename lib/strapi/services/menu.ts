import { strapiFetch } from '..';
import { Menu, StrapiMenuOperation } from '../domain/menu';
import { getMenuQuery } from '../queries/menu';

export async function getMenu(handle: string): Promise<Menu[] | undefined> {
  const res = await strapiFetch<StrapiMenuOperation>({
    query: getMenuQuery,
    variables: {
      handle
    }
  });

  return res.body?.data?.menu?.data?.attributes?.items;
}
