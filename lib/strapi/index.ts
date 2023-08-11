import { isStrapiError } from './type-guards';

// const GRAPHQL_ENDPOINT = `${process.env.STRAPI_MOCK_URL}`;
// const GRAPHQL_ENDPOINT = 'https://5a03cffb-e055-4896-926e-1fb12368b22a.mock.pstmn.io';
const GRAPHQL_ENDPOINT = 'https://canaid-backend-ukwd6.ondigitalocean.app/graphql';
// const GRAPHQL_ENDPOINT = 'https://webhook.site/08ca8eba-32e1-4bb0-8397-fa4ffa26d778'

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

export async function strapiFetch<T>({
  cache = process.env.NODE_ENV == 'development' ? 'no-store' : 'force-cache',
  headers,
  query,
  tags,
  variables,
  url = GRAPHQL_ENDPOINT
}: {
  cache?: RequestCache;
  headers?: HeadersInit;
  query: string;
  tags?: string[];
  variables?: ExtractVariables<T>;
  url?: string;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-mock-match-request-body': 'true',
        ...headers
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      }),
      cache,
      ...(tags && { next: { tags } })
    });

    const body = await result.json();

    if (body.errors) {
      console.error("Error query: ", query, body.errors);
      // throw body.errors;
    }

    return {
      status: result.status,
      body
    };
  } catch (e) {
    if (isStrapiError(e)) {
      throw {
        status: e.status || 500,
        message: e.message,
        query
      };
    }

    throw {
      error: e,
      query
    };
  }
}
