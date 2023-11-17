import { getCollectionProducts } from 'lib/strapi/services/collection';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
//import { defaultSort, sorting } from 'lib/constants';

// export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCollectionProducts(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.SEO.title || collection.title,
    description:
      collection.SEO.description || collection.description || `${collection.title} products`
  };
}

export default async function CategoryPage({
  params,
  // searchParams
}: {
  params: { collection: string };
  // searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // const { sort } = searchParams as { [key: string]: string };
  // const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const productData = await getCollectionProducts(params.collection);
  const products = productData?.products?.data;

  return (
    <section>
      {products?.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}
