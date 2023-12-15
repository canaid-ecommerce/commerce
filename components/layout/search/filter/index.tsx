import { SortFilterItem } from 'lib/constants';
import { Collection, StrapiCollection } from 'lib/strapi/domain/collection';
import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';
import ItemCollection from './item-collection';

export type ListItem = SortFilterItem | PathFilterItem | Collection | StrapiCollection;
export type PathFilterItem = { title: string; path: string };

const all: Collection = {
  title: 'All',
  handle: ''
}

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      { Array.isArray(list) && <ItemCollection collection={all} /> }
      {list.map((item: ListItem, i) => {
        return 'attributes' in item ? <ItemCollection collection={item.attributes as Collection} /> : <FilterItem item={item} />
      })}
    </>
  );
}

export default function FilterList({ list, title }: { list: ListItem[]; title?: string }) {
  return (
    <>
      <nav>
        {title ? <h3 className="hidden text-xs text-neutral-500 md:block">{title}</h3> : null}
        <ul className="hidden md:block">
          <FilterItemList list={list} />
        </ul>
        <ul className="md:hidden">
          TODO: Add dropdown movile
          {/* <FilterItemDropdown list={list} /> */}
        </ul>
      </nav>
    </>
  );
}
