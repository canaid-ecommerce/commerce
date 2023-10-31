import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/strapi/domain/product';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  console.log("products", products);
  
  return null;
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link className="inline-block h-full w-full" href={`/product/${product.handle}`}>
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: String(product.maxVariantPrice.amount),
                currencyCode: product.maxVariantPrice.currencyCode
              }}
              src={product.featuredImage?.url}
              width={600}
              height={600}
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
