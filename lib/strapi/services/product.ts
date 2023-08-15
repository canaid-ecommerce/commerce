import { strapiFetch } from '..';
import { Product, StrapiProductOperation } from '../domain/product';
import { getProductQuery } from '../queries/product';

export async function getProduct(handle : string): Promise<Product | undefined> {
    const res = await strapiFetch<StrapiProductOperation>({
        query: getProductQuery,
        variables: {
            handle
        }
    });

    if (!res.body?.data?.product?.data ) {
        console.error(`product ${handle} not found or unpublished`)
    };
    
    return res.body.data.product?.data;
}