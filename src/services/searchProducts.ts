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
      /*
        // simulate expensive operation
        if (query !== '') {
          for (let i = 0; i < 10000; i++) {
              products.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase())
              );
            }
          }
        // This's misleading simulation because of `setTimeout` it runs outside React rendering.
      */

      const filteredProducts =
        query !== ''
          ? products.filter((product) =>
              product.name.toLowerCase().includes(query.toLowerCase())
            )
          : products;
      resolve(filteredProducts);
    }, Math.random() * 1500);

    signal?.addEventListener('abort', () => {
      clearTimeout(timeoutId);
      reject(new DOMException('Search aborted', 'AbortError'));
    });
  });
};
