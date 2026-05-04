## Performance Contract: [Feature Name]

`Required for any feature involving lists, data fetching, or frequent state updates.`

Acceptable render count per user action: [N]
Acceptable time to interactive: [Xms]
Acceptable bundle size addition: [Xkb gzipped]

Identified rerender risks:

- [component] rerenders when [state] changes because [reason]

Memoization decisions:

- [what]: memoized / not memoized
- Why: [profiler-confirmed reason, not assumption]

Profiling baseline (before optimization):

- Render count: N
- Commit duration: Xms
- Frame rate under scroll: Xfps

Profiling result (after optimization):

- Render count: N
- Commit duration: Xms
- Delta: [% improvement]
