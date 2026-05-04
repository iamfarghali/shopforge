import type { Product } from '@/types/product';
import ProductCard from './components/ProductCard';

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Smartphone', price: 800 },
  { id: 3, name: 'Headphones', price: 150 },
  { id: 4, name: 'Keyboard', price: 75 },
  { id: 5, name: 'Mouse', price: 40 },
  { id: 6, name: 'Monitor', price: 300 },
  { id: 7, name: 'Tablet', price: 600 },
  { id: 8, name: 'Smartwatch', price: 250 },
];
function App() {
  return (
    <div className="container h-screen mx-auto px-10 pt-12 bg-gray-50">
      <div className="grid grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard product={p} />
        ))}
      </div>
    </div>
  );
}

export default App;
