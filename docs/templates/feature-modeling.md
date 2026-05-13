## Feature Modeling: [Feature Name]

`Use this before writing a single line of code. Every feature. No exceptions.`

### Domain question

What real-world problem does this feature solve?
What would break for a real user if this feature didn't exist?

### Entity inventory

List every noun in this domain.
What data belongs to each entity?
What is its shape at rest (stored) vs in transit (API response)?

### Relationship map

How do entities relate?
What constraints exist between them? (e.g., an order must have at least one item)
What is the cardinality? (one-to-one, one-to-many, many-to-many)

### Action inventory

List every verb — every user action and system event.
What triggers each?
What state changes? What side effects fire?

### State ownership map

For each piece of state, assign exactly one owner:

- Component (local, ephemeral)
- URL (shareable, survives refresh)
- Server cache (TanStack Query — remote source of truth)
- External store (Zustand — global client state that outlives components)
Why does it belong there and not somewhere else?

### Data flow diagram

Trace: User action → state change → derived values → render output
Where does data transform? Who owns each transformation?

### Illegal states

What combinations of state should never coexist?
Example: `{ status: 'loading', data: Product[] }` — data before response is illegal.
Which of these can be made impossible by type design alone?

### Degraded states

What happens when:

- Network request fails
- Response is empty
- User is unauthorized
- Data is stale
Does the UI degrade gracefully or silently corrupt?

### My design attempt

Write before looking at any solution:

- Domain types (TypeScript)
- Hook signatures
- Component tree (names only, no JSX)
- Data flow in plain English
