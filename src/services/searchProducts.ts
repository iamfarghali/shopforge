import products from '@/data/products';

export async function searchProducts(query: string) {
  await new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 1500);
  });

  return query !== ''
    ? products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    : products;
}
