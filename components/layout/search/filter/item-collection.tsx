import { Collection } from 'lib/strapi/domain/collection';

export default function ItemCollection({ collection }: { collection: Collection }) {
    console.log("collection", collection);
    
    return (
        <div>Item</div>
    );
};