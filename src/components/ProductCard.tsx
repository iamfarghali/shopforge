import type { Product } from '@/types/product';
import { useState } from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="flex flex-col gap-3 border border-gray-700 shadow-2xs shadow-gray-800 py-4 px-4 rounded-2xl">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-gray-600">{product.price}$</p>
        <button
          onClick={() => setIsLiked((prev) => !prev)}
          className="cursor-pointer"
        >
          {isLiked ? '❤️' : '🩶'}
        </button>
      </div>
    </div>
  );
}
