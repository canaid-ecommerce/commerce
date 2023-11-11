import { Collection } from 'lib/strapi/domain/collection';

export default function ItemCollection({ collection }: { collection: Collection }) {
    console.log("collection", collection);
    
    return (
        <nav>
            <h3 className="hidden text-xs text-neutral-500 md:block">{collection.handle}</h3>
            <ul className="hidden md:block">
                <li>
                    <p>{collection.products?.data?.id}</p>
                </li>
            </ul>
            <ul className="md:hidden">
                <li>
                    <p>{collection.products?.data?.id}</p>
                </li>
            </ul>
        </nav>
    );
};