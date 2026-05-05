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
    <input
      type="text"
      name="product_name"
      value={query}
      className="border w-1/2 px-2"
      placeholder="Search..."
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
