import { useEffect, useState } from 'react';

type Props = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="search" className="cursor-pointer font-semibold">
        Search <span className="text-gray-400">via remote source</span>
      </label>
      <input
        id="search"
        type="text"
        name="product_name"
        value={query}
        className="border w-full p-2"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
