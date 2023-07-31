import Link from 'next/link';

// components
import { GridTileImage } from './grid/tile';

// lib
import { getCollectionProducts } from 'lib/strapi/services/collection';

export async function Carousel() {
  const collection = await getCollectionProducts('reloj-inteligente');
  const products = collection?.products?.data;

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <div className="flex animate-carousel gap-4">
        {Array.isArray(products) && products.map((product, i) => {
          return <Link
            key={`${product?.attributes?.handle}${i}`}
            href={`/product/${product?.attributes?.handle}`}
            className="h-[30vh] w-2/3 flex-none md:w-1/3"
          >
            <GridTileImage
              alt={product?.attributes?.title}
              label={{
                title: product?.attributes?.title,
                amount: String(product?.attributes?.priceRange?.amount),
                currencyCode: product?.attributes?.priceRange?.currencyCode
              }}
              src={product?.attributes?.featuredImage?.url}
              width={600}
              height={600}
            />
          </Link>
        })}
      </div>
    </div >
  );
}
