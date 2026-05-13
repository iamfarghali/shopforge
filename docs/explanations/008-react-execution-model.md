# React Execution Model

## Idea

- React timeline from user action until UI update appears on screen.

## Why

- It exists to update UI in a fast and smart way.
- It solves slow full-page updates by splitting work into phases.
- It helps React know what changed before touching the real DOM.
- It makes features like concurrent rendering possible through Fiber.

## Key Points

- User interactions {click, typing, scrolling, ...}
- React interception
- Creating `Update` object {`HookQueue`}
- Set Priority = Lane = `Schedule` {`NoLane`, `SyncLane`, `TransitionLane`, `RetryLane`, ...}
- `Render phase`
  - Run component functions
  - Build `Fiber Node`
  - Reconciliation [Reconciliation](./001-react-reconciliation.md)
  - Create work-in-progress tree
  - Interruptible
  - Pure phase
- `Commit phase`
  - `BeforeMutation`
  - `Mutation`
  - `Style Calculation`
  - `Layout (Reflow)` {calculate positions and sizes}
  - Run `useLayoutEffect`
  - Synchronous
- `Paint`
  - Fill pixels into layers
- `Composite`
  - Merge layers
  - Send final result to GPU
- Running passive effects
  - `useEffect`
- `double-buffered Trees`
  - Current Tree
  - Work-in-Progress Tree
- React before Fiber
  - Recursive Rendering
  - One big blocking update
- React after Fiber
  - Update by Fiber node
  - Split work into units
- Concurrent Rendering [Concurrent React Note](./005-concurrent-react.md)
  - Pause render
  - Resume render
  - Cancel render
  - Restart render
- Related tools
  - `useTransition` [useTransition Note](./006-useTransition.md)
  - `useDeferredValue` [useDeferredValue Note](./007-useDeferredValue.md)

## Confusing

- How React stores Fiber links internally
- How scheduler chooses lane priority
- HookQueue internals
- Suspense scheduling
- Browser rendering pipeline deeper details

## Explanation

- User makes action like typing.
- React catches this and creates an update object.
- React gives this update a priority lane.
- Render phase builds the next UI in memory using Fiber.
- Commit phase applies real DOM changes.
- Browser paints screen.
- Passive effects run after paint.

Mental model:

React first **plans**, then **builds**, then **shows**.

## Takeaway

- Render phase = React thinks
- Commit phase = React changes DOM
- Paint = Browser shows result
- `useLayoutEffect` runs during commit before paint
- `useEffect` runs after paint
- Fiber allows React to pause render work
- Concurrent rendering is safe because React works with double-buffered trees
