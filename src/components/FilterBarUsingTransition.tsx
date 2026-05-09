import { useEffect, useState, useTransition, type ChangeEvent } from 'react';

type Props = {
  onFilter: (query: string) => void;
};

export default function FilterBarUsingTransition({ onFilter }: Props) {
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isPending, startTransition] = useTransition();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    startTransition(() => {
      setQuery(e.target.value);
    });
  }

  useEffect(() => {
    onFilter(query);
    return () => {};
  }, [query, onFilter]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="filter" className="cursor-pointer font-semibold">
        Filter <span className="text-green-700 text-xs">(transition)</span>
      </label>
      <input
        id="filter"
        type="text"
        name="product_name"
        value={inputValue}
        className={`border w-full p-2 ${isPending ? 'text-green-700' : 'text-gray-700'}`}
        placeholder="Filter..."
        onChange={handleChange}
      />
    </div>
  );
}
