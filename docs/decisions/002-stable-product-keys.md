## 002-stable-product-keys

Options considered:

- index as key (written explicitly or didn't use key prop)
  - Cost: components identity breaks after reorder
  - Benefit: none
- product.id (or another unique prop) as key
  - Cost: require unique IDs
  - Benefit: preserves state correctly

Decision: product.id

Rationale:
Products (or any other collections) can reorder during sorting and filtering.
Stable identity is required.

Reversibility: Easy

When to revisit:
Don't! or maybe if you want to depend on another unique ID.
