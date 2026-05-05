import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import type { Product } from '@/types/product';
import { searchProducts } from './services/searchProducts';

function App() {
  const [results, setResults] = useState<Product[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [ascending, setAscending] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      console.log('Searching for:', searchTerm);
      const data = await searchProducts(searchTerm);
      console.log('Result for:', searchTerm);
      setResults(data);
      setLoading(false);
    }
    fetchData();
  }, [searchTerm]);

  const sortedProducts = [...results].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );

  return (
    <div className="container h-screen mx-auto px-10 pt-12 bg-gray-50">
      <div className="mb-4 flex items-center justify-between gap-1">
        {/* Search */}
        <SearchBar onSearch={setSearchTerm} />

        <button
          className="bg-gray-800 text-gray-50 px-3"
          onClick={() => setAscending((prev) => !prev)}
        >
          Sort
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-4 gap-4">
        {loading
          ? 'Loading...'
          : sortedProducts.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default App;
