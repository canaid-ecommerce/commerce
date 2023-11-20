import { SortFilterItem } from 'lib/constants';
import { Collection } from 'lib/strapi/domain/collection';
import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';
import ItemCollection from './item-collection';

export type ListItem = SortFilterItem | PathFilterItem | Collection;
export type PathFilterItem = { title: string; path: string };

const all: Collection = {
  title: 'All',
  handle: ''
}

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      { list?.[0].attributes && <ItemCollection key={1} collection={all} /> }
      {list.map((item: ListItem, i) => {
        return 'attributes' in item ? <ItemCollection key={i} collection={item?.attributes} /> : <FilterItem key={i} item={item} />
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
          <FilterItemDropdown list={list} />
        </ul>
      </nav>
    </>
  );
}
