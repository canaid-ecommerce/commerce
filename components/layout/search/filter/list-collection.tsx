import { Collection } from 'lib/strapi/domain/collection';

export default function ListCollection({ collections }: { collections: Collection[] }) {
    return (
        <div>
            {collections.map((collection, i) => (
                <div key={i}>{collection.title}</div>
            ))}
        </div>
    )
};