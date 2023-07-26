import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// lib
import { getPage } from 'lib/strapi/services/page';

//components
import Prose from 'components/prose';

export const revalidate = 43200; // 12 hours in seconds

export async function generateMetadata({
  params
}: {
  params: { page: string };
}): Promise<Metadata> {
  const data = await getPage(params.page);
  if (!data) return notFound();

  const title = data?.title;
  const bodySummary = data?.bodySummary;
  const seo = data?.SEO;
  const createdAt = data?.createdAt;
  const updatedAt = data?.updatedAt;

  if (!data) return notFound();

  return {
    title: seo?.title || title,
    description: seo?.description || bodySummary,
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(title)}`,
          width: 1200,
          height: 630
        }
      ],
      publishedTime: createdAt,
      modifiedTime: updatedAt,
      type: 'article'
    }
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  const data = await getPage(params.page);
  if (!data) return notFound();

  const title = data?.title;
  const body = data?.body;
  const updatedAt = data?.updatedAt;

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{title}</h1>
      <Prose className="mb-8" html={body as string} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date(updatedAt))}.`}
      </p>
    </>
  );
}
