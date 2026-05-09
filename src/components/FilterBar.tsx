import { useEffect, useState } from 'react';

type Props = {
  onFilter: (query: string) => void;
};

export default function FilterBar({ onFilter }: Props) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    onFilter(query);
    return () => {};
  }, [query, onFilter]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="filter" className="cursor-pointer font-semibold">
        Filter{' '}
        <span className="text-red-700 text-xs">(without transition)</span>
      </label>
      <input
        id="filter"
        type="text"
        name="product_name"
        value={query}
        className="border w-full p-2"
        placeholder="Filter..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
