# Race Conditions

## Idea

- Let's say we've been running multiple `async` tasks, there's a possibility that an older result could arrive later and overwrite a newer one.

## Why

- Async work finishes in unpredictable order.
- Without control, the UI may show outdated data.

## Key Points

- Tasks don't finish in the order they start.
- React applies state updates as they arrive.
- Older results can overwrite newer ones.

## Confusing

- Why React can’t know which result is the newest
- Why correct dependency arrays don’t fix this

## Explanation

- Three people bring you papers: `A, B, C`
- `A` starts first, `C` starts last
- But `A` arrives last with old data
- You read `A`'s paper because it came last
- React behaves the same way

## Takeaway

- Async results can arrive out of order, so old data can replace new data if not handled properly
