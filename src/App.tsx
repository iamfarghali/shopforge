import { useEffect, useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import type { Product } from '@/types/product';
import { searchProducts } from '@/services/searchProducts';
import FilterGroup from './components/FilterGroup';

function App() {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('');
  const [ascending, setAscending] = useState(true);

  // Search via remote source
  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setLoading(true);
        const data = await searchProducts(searchTerm, controller.signal);
        setResults(data);
      } catch (err) {
        if (err instanceof DOMException && err.name == 'AbortError') return;
        console.log(err);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }
    fetchData();

    return () => controller.abort();
  }, [searchTerm]);

  // Filter local data
  const filteredProducts = useMemo(() => {
    // Simulate heavy load
    for (let i = 0; i < 500; i++) {
      results.filter((product) =>
        product.name.toLowerCase().includes(filterTerm.toLowerCase())
      );
    }

    return filterTerm.trim() !== ''
      ? results.filter((product) =>
          product.name.toLowerCase().includes(filterTerm.toLowerCase())
        )
      : results;
  }, [results, filterTerm]);

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl container mx-auto px-10 py-12">
        <div className="grid grid-cols-4 items-baseline-last gap-2 pb-4">
          {/* Search */}
          <SearchBar onSearch={setSearchTerm} />

          {/* Filters */}
          <FilterGroup onFilter={setFilterTerm} />

          <button
            className="bg-gray-200 text-gray-950 text-sm shadow-sm cursor-pointer p-2 rounded-xs"
            onClick={() => setAscending((prev) => !prev)}
          >
            Price: {ascending ? 'Low → High' : 'High → Low'}
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-3 gap-4">
          {loading
            ? 'Loading...'
            : sortedProducts.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
