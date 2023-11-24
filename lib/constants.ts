export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'createdAt' | 'maxVariantPrice.amount';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  // { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Latest arrivals', slug: 'createdAt:desc', sortKey: 'createdAt', reverse: true },
  { title: 'Price: Low to high', slug: 'maxVariantPrice.amount:asc', sortKey: 'maxVariantPrice.amount', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'maxVariantPrice.amount:desc', sortKey: 'maxVariantPrice.amount', reverse: true }
];

export const TAGS = {
  collections: 'collections',
  products: 'products'
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';
