import type { Product } from '@/types/product';
import { useState } from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="flex flex-col gap-2 border border-gray-900 shadow-sm shadow-gray-300 py-3 px-2 rounded-2xl">
      <h2>{product.name}</h2>
      <div className="flex justify-between items-center">
        <p>{product.price}$</p>
        <button onClick={() => setIsLiked((prev) => !prev)}>
          {isLiked ? '❤️' : '🩶'}
        </button>
      </div>
    </div>
  );
}
