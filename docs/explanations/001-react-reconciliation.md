# Reconciliation

## Idea

- React compares old UI vs new UI and updates only what changed

## Why

- Re-rendering the whole UI is expensive
- So React tries to update only the necessary parts

## Key Points

- React creates a new virtual UI after state changes
- Then compares it with the previous one (snapshot) using (diffing) algo.
- Updates only the differences in the real DOM

## Confusing

- How React knows which element is which

## Explanation

So why do we need reconciliation?

When the user interacts with the UI (e.g. reordering a list), React needs to update the UI.

There are two approaches:

1. Rebuild everything from scratch → very expensive
2. Compare old vs new UI and update only what changed → this is reconciliation

But the question is: how does React know what changed?

For lists, React needs a way to identify each item.

If we don’t provide a key, React uses the index as a fallback.
This causes problems when items move.

Example:
Imagine 3 kids sitting on 3 chairs, each kid has their own toys (state).

If the kids change seats but we track only the chair position (index),
each kid ends up with someone else’s toys (state).

This is what happens when using index as a key.

## Takeaway

- React needs a stable way to identify elements
- Keys should be unique and stable
- Using index as key can break state when list order changes
