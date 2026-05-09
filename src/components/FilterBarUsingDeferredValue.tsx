import { useEffect, useState, useDeferredValue, type ChangeEvent } from 'react';

type Props = {
  onFilter: (query: string) => void;
};

export default function FilterBarUsingDeferredValue({ onFilter }: Props) {
  const [query, setQuery] = useState('');

  // Consumer-controlled deferred version
  const deferredQuery = useDeferredValue(query);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    // Update stays urgent
    setQuery(e.target.value);
  }

  useEffect(() => {
    onFilter(deferredQuery);
  }, [deferredQuery, onFilter]);

  const isPending = query !== deferredQuery;

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="filter" className="cursor-pointer font-semibold">
        Filter <span className="text-indigo-700 text-xs">(deferred)</span>
      </label>

      <input
        id="filter"
        type="text"
        name="product_name"
        value={query}
        className={`border w-full p-2 ${
          isPending ? 'text-indigo-700' : 'text-gray-700'
        }`}
        placeholder="Filter..."
        onChange={handleChange}
      />
    </div>
  );
}
