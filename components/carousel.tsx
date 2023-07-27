import Link from 'next/link';
import { GridTileImage } from './grid/tile';

//lib
import { getCollectionProducts } from 'lib/strapi/services/collection';
import { getCollectionProducts as getCollectionProducts2 } from 'lib/shopify';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts2({ collection: 'hidden-homepage-carousel' });

  const carousel = await getCollectionProducts('reloj-inteligente');
  console.log(carousel);

  return (
    <div className=" w-full overflow-x-auto pb-6 pt-1">
      <div className="flex animate-carousel gap-4">
        {[...products, ...products].map((product, i) => (
          <Link
            key={`${product.handle}${i}`}
            href={`/product/${product.handle}`}
            className="h-[30vh] w-2/3 flex-none md:w-1/3"
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode
              }}
              src={product.featuredImage?.url}
              width={600}
              height={600}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
