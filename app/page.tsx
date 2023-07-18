import { Suspense } from 'react';
// import { gql } from '@apollo/client';
// import { getClient } from 'lib/strapi/client';

// components
import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
};

export const dynamic = 'force-dynamic';

// const query = gql`
//   query {
//     users {
//       id
//       name
//       email
//     }
//   }
// `;

// interface Response {
//   users: { id: number; name: string; email: string }[];
// }

export default async function HomePage() {
  // const { data, loading } = await getClient().query<Response>({ query: query });
  // console.log(data);

  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
