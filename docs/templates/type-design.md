## Type Design: [Feature Name]

Domain types:

- What entities exist as types?
- What states are possible? Which combinations are illegal?
- What discriminated union covers the async lifecycle?

API contract types:

- Request shape (what you send)
- Response shape — success case
- Response shape — error case
- Transformation: what changes between API shape and UI shape, and where?

Component contract types:

- Exact prop interface for each component
- What do callbacks signal? What do they receive?
- What generic constraints apply, and why?

Illegal state audit:

- List every impossible state
- For each: can TypeScript prevent it, or only runtime logic?
