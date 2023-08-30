import { findWhere } from 'underscore';

//Components
import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';

//Variants
import { VariantSelector } from './variant-selector';

//lib
import { Product } from 'lib/strapi/domain/product';
import { v4 as uuidv4 } from 'uuid';

export function ProductDescription({ product }: { product: Product }) {
  if (!product) return null;

  const maxPrice = findWhere(product?.priceRange, { '__typename': 'ComponentItemsMaxVariantPrice' });

  // TODO: custom handle variant
  const customVariants = product.variants.map(variant => {
    return {
      handle: uuidv4(),
      ...variant
    }
  });

  product.variants = [...customVariants];

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

      {/* TODO - se comenta VariantSelector hasta que funcione bien el schema */}
      {/* <VariantSelector options={product.options} variants={product.variants} /> */}

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </>
  );
}
