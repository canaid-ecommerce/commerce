import Link from 'next/link';
import { GridTileImage } from './grid/tile';

//lib
import { getCollectionProducts } from 'lib/strapi/services/collection';

export async function Carousel() {
  const collection = await getCollectionProducts('reloj-inteligente');
  console.log(collection?.products);

  if(!collection) {
    return 'Loading Collection...'
  }

  const productArray = Object.values(collection.products)

  return (
    <div className=" w-full overflow-x-auto pb-6 pt-1">
      <div className="flex animate-carousel gap-4">
        {productArray.map((product, i) => (
          <Link
            key={`${product.handle}${i}`}
            href={`/product/${product.handle}`}
            className="h-[30vh] w-2/3 flex-none md:w-1/3"
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: String(product.priceRange.amount),
                currencyCode: product.priceRange.currencyCode
              }}
              src={product.featuredImage.url}
              width={600}
              height={600}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
