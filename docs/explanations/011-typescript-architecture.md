# ShopForge — TypeScript Architecture

## Idea

- TypeScript is used to encode business rules directly into the type system.

## Why

- To catch mistakes at compile time before they become runtime bugs.

## Key Points

- Branded types make IDs distinct.
- Discriminated unions model state safely.
- AsyncState lets UI represent loading, success, and error explicitly.

## Confusing

- Why normal string aliases are unsafe.
- How unions prevent illegal states.
- Why type safety is about business correctness, not just syntax.

## Explanation

- A ProductId and CustomerId may both be strings, but they represent different meanings.
- Branding adds invisible identity so TypeScript can distinguish them.
- Unions force code to handle every valid state explicitly.

## Takeaway

- Types should protect business meaning, not just describe shapes.
