'use client';

import clsx from 'clsx';
import { Collection } from 'lib/strapi/domain/collection';
import { createUrl } from 'lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ItemCollection({ collection }: { collection: Collection }) {
    //console.log("collection", collection);

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete('q');
    const active = pathname === collection.handle;

    const DynamicTag = active ? 'p' : Link;

    return (
        <nav>
            <DynamicTag
                href={createUrl(collection.handle, newParams)}
                className={clsx(
                    'w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100',
                    {
                        'underline underline-offset-4': active
                    }
                )}
            >
                {collection.title}
            </DynamicTag>
        </nav>
    );
};
