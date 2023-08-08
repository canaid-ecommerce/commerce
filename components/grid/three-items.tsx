import Link from 'next/link';
import { findWhere, max } from 'underscore';

//components
import { GridTileImage } from 'components/grid/tile';

//lib
import type { Product } from 'lib/strapi/domain/product';
import { getCollectionProducts } from 'lib/strapi/services/collection';


function ThreeItemGridItem({ item, size }: { item: any, size: 'full' | 'half' }) {
  const { attributes } = item;
  const maxPrice = findWhere(attributes.priceRange, { '__typename': 'ComponentItemsMaxVariantPrice' });

  return (
    <div
      className={size === 'full' ? 'lg:col-span-4 lg:row-span-2' : 'lg:col-span-2 lg:row-span-1'}
    >
      <Link className="block h-full" href={`/product/${attributes?.handle}`}>
        <GridTileImage
          src={attributes?.featuredImage?.url}
          width={size === 'full' ? 1080 : 540}
          height={size === 'full' ? 1080 : 540}
          priority={true}
          alt={attributes.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: attributes.title as string,
            amount: maxPrice?.amount,
            currencyCode: maxPrice?.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts('carousel-footer');
  const products = homepageItems?.products?.data;

  if (!products || !products[0] || !products[1] || !products[2]) return null;
  //if (!homepageItems?.id[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = products;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 lg:grid-cols-6 lg:grid-rows-2">
      <ThreeItemGridItem size="full" item={firstProduct} />
      <ThreeItemGridItem size="half" item={secondProduct} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}
