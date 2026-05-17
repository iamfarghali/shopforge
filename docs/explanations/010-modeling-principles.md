# ShopForge — Core Modeling Principles

## Idea

- Good architecture makes the system reflect real business behavior.

## Why

- Because wrong models create bugs, duplicated state, and confusing code.
- The better the model, the easier the implementation.

## Key Points

- Cart is temporary intent, Order is permanent history.
- Payment is separate because one order can have many payment attempts.
- Stored historical snapshots are valid when current data can change later.

## Confusing

- Why `Order.totalPrice` can be stored while cart total should be derived.
- Why Address can be a Value Object even if it is referenced by multiple entities.
- When optional fields are truly optional in business terms.

## Explanation

- Cart total changes whenever cart items change, so it should be derived.
- Order total becomes historical truth after checkout, so storing it preserves reality.
- Optional means the business process can still work without that field.

## Takeaway

- Derived state is for live changing data.
- Stored snapshots are for preserving historical truth.
