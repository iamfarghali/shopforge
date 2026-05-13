# Concurrent React

## Idea

- A set of tools that let React prioritize, pause, and schedule UI updates so the app always feels fast.

## Why

- One slow render used to freeze everything. These techniques give React a traffic control system — urgent updates go first, heavy work waits its turn.

## Key Points

- `startTransition`: wraps non-urgent state updates so React can delay them if something more important comes in
- `useTransition`: same as above but also gives you an isPending flag to show a loading state during the delay
- `useDeferredValue`: defers a value (not an action), useful when you don't control the state setter (e.g. props)
- `Suspense`: holds a component from rendering until its data/code is ready, shows a fallback in the meantime
- `lazy()`: code-splits a component and loads it only when needed, always paired with Suspense
- `Automatic Batching`: groups multiple setState calls (even inside setTimeout or fetch) into one single re-render
- `useId`: generates stable, unique IDs safe for concurrent rendering (avoids hydration mismatches in SSR)

## Confusing

- useTransition vs useDeferredValue — use useTransition when you own the state, use useDeferredValue when you only receive a value
- Suspense for data fetching only works with frameworks like Next.js or libraries like React Query — not raw fetch()

## Explanation

- Think of it as a hospital triage system: startTransition / useTransition = non-emergency patients wait. Suspense = patient isn't seen until their test results are ready. lazy() = only call the specialist when actually needed. Automatic Batching = one nurse handles all your vitals in one visit, not five separate trips.

## Takeaway

- Each technique targets one bottleneck: speed (startTransition, useTransition), waiting (Suspense, lazy), derived values (useDeferredValue), and unnecessary re-renders (Automatic Batching) — together they make React feel instant.
