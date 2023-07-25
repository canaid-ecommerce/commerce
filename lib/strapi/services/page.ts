import { strapiFetch } from "..";
import { Page, StrapiPageOperation } from "../domain/page";
import { getQuery } from "../queries/page";

export async function getPage(handle: string): Promise<Page | undefined> {
    const res = await strapiFetch<StrapiPageOperation>({
        query: getQuery,
        variables: {
            handle
        }
    });

    return res.body?.data?.page?.data?.attributes;
}