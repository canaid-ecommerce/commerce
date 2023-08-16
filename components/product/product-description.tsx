//import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { findWhere } from 'underscore';
import { VariantSelector } from './variant-selector';
import { Product } from 'lib/strapi/domain/product';

export function ProductDescription({ product }: { product: Product }) {
  if (!product) return null;

  console.log('Variants:', product.variants);

  const maxPrice = findWhere(product?.priceRange, { '__typename': 'ComponentItemsMaxVariantPrice' });

  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={String(maxPrice?.amount)}
            currencyCode={String(maxPrice?.currencyCode)}
          />
        </div>
      </div>
      {/* <VariantSelector options={product.options} variants={product.variants} /> */}

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      {/* <AddToCart variants={product.variants} availableForSale={product.availableForSale} /> */}
    </>
  );
}
