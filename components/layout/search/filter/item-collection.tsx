'use client';

import clsx from 'clsx';
import { Collection } from 'lib/strapi/domain/collection';
import { createUrl } from 'lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ItemCollection({ collection }: { collection: Collection }) {
    const pathname = usePathname();
    const active = pathname === `/search/${collection.handle}`;
    const DynamicTag = active ? 'p' : Link;

    return (
        <li className="mt-2 flex text-black dark:text-white" key={collection.title}>
            <DynamicTag
                href={`/search/${collection.handle}`}
                className={clsx(
                    'w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100',
                    {
                        'underline underline-offset-4': active
                    }
                )}
            >
                {collection.title}
            </DynamicTag>
        </li>
    );
};
