import products from '@/data/products';
import type { Product } from '@/types/product';

type SearchProducts = (
  query: string,
  signal?: AbortSignal
) => Promise<Product[]>;

export const searchProducts: SearchProducts = (
  query: string,
  signal?: AbortSignal
) => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      const filteredProducts =
        query !== ''
          ? products.filter((product) =>
              product.name.toLowerCase().includes(query.toLowerCase())
            )
          : products;
      resolve(filteredProducts);
    }, Math.random() * 1500);

    signal?.addEventListener('abort', () => {
      console.log('Aborting');
      clearTimeout(timeoutId);

      reject(new DOMException('Search aborted', 'AbortError'));
    });
  });
};
