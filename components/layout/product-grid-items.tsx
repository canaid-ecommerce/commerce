import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/strapi/domain/product';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {

  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.id} className="animate-fadeIn">
          <Link className="inline-block h-full w-full" href={`/product/${product.attributes.handle}`}>
            <GridTileImage
              alt={product.attributes.title}
              label={{
                title: product.attributes.title,
                amount: product.attributes.maxVariantPrice?.amount?.toString(),
                currencyCode: product.attributes.maxVariantPrice?.currencyCode
              }}
              src={product.attributes.featuredImage?.url}
              width={600}
              height={600}
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
