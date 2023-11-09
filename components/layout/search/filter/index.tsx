//import { SortFilterItem } from 'lib/constants';
import { Collection } from 'lib/strapi/domain/collection';
import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';
import ListCollection from './list-collection';

export type ListItem = Collection;
export type PathFilterItem = { title: string; path: string };

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export default function FilterList({ list, title }: { list: Collection[]; title?: string }) {
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
        <ListCollection collections={list} />
      </nav>
    </>
  );
}
