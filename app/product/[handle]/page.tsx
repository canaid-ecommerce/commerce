import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { findWhere } from 'underscore';

//Components 
import { GridTileImage } from 'components/grid/tile';
import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';

//lib
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { Image } from 'lib/shopify/types';
import { getProduct } from 'lib/strapi/services/product';


export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.images || {};
  const hide = product.tags.name.some(tag => tag === HIDDEN_PRODUCT_TAG );

  return {
    title: product.SEO.title || product.title,
    description: product.SEO.description || product.description,
    robots: {
      index: hide,
      follow: hide,
      googleBot: {
        index: hide,
        follow: hide
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  const minPrice = findWhere(product?.attributes.priceRange, { '__typename': 'ComponentItemsMinVariantPrice' });
  const maxPrice = findWhere(product?.attributes.priceRange, { '__typename': 'ComponentItemsMaxVariantPrice' });
  
  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product?.title,
    description: product?.description,
    image: product?.images.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product?.priceRange.currencyCode, 
      highPrice: maxPrice.amount,
      lowPrice: minPrice.amount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="rounded-lg border border-neutral-200 bg-white p-8 px-4 dark:border-neutral-800 dark:bg-black md:p-12 lg:grid lg:grid-cols-6">
          <div className="lg:col-span-4">
            <Gallery
              images={product?.attributes.images.map((image: Image) => ({
                src: image.url,
                altText: image.altText
              }))}
            />
          </div>

          <div className="py-6 pr-8 md:pr-12 lg:col-span-2">
            <ProductDescription product={product?.attributes.description} />
          </div>
        </div>
        <Suspense>
          <RelatedProducts id={product?.id} />
        </Suspense>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
};

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <div className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product, i) => {
          return (
            <Link
              key={i}
              className="w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
              href={`/product/${product.handle}`}
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
          );
        })}
      </div>
    </div>
  );
}
