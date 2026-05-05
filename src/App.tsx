import type { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 1200, liked: false },
  { id: 2, name: 'Smartphone', price: 800, liked: false },
  { id: 3, name: 'Headphones', price: 150, liked: false },
  { id: 4, name: 'Keyboard', price: 75, liked: false },
  { id: 5, name: 'Mouse', price: 40, liked: false },
  { id: 6, name: 'Monitor', price: 300, liked: false },
  { id: 7, name: 'Tablet', price: 600, liked: false },
  { id: 8, name: 'Smartwatch', price: 250, liked: false },
];
function App() {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container h-screen mx-auto px-10 pt-12 bg-gray-50">
      {/* Search */}
      <div className="border mb-4">
        <input
          type="text"
          name="product_name"
          value={search}
          className="w-full px-2"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Products */}
      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.map((p) => (
          <ProductCard product={p} />
        ))}
      </div>
    </div>
  );
}

export default App;
