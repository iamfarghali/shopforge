# ShopForge — Domain Modeling & Type Architecture

## Idea

- We learned how to model a real e-commerce system by discovering its business entities, relationships, rules, and then representing them with TypeScript types.

## Why

- To avoid writing random interfaces without understanding what the system actually needs.
- To make invalid states harder (or impossible) to represent.
- To design software based on business reality, not guesses.

## Key Points

- Types are derived from domain reasoning, not invented from nowhere.
- Separate entities only when they have independent identity or lifecycle.
- If data can always be calculated from trusted source data, derive it instead of storing it.

## Confusing

- Knowing when something should be an Entity vs Value Object.
- Deciding when stored snapshot data is valid vs when data should stay derived.
- Understanding that frontend, backend, and database can represent the same concept differently.

## Explanation

- First, identify what exists in the business world (Product, Cart, Order, Payment, Customer).
- Then ask how each thing behaves, changes, and relates to other things.
- After understanding the real-world rules, represent them in TypeScript.
- This means business logic creates the types, not the other way around.

## Takeaway

- I should never start by writing interfaces.
- I should first understand the system, simulate real scenarios, discover the rules, then encode those rules with types.
