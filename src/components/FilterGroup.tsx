import { useState } from 'react';
import FilterBar from './FilterBar';
import FilterBarUsingTransition from './FilterBarUsingTransition';
import FilterBarUsingDeferredValue from './FilterBarUsingDeferredValue';

type Props = {
  onFilter: (value: string) => void;
};
type FilterMode = 'normal' | 'transition' | 'deferred';

export default function FilterGroup({ onFilter }: Props) {
  const [filterMode, setFilterMode] = useState<FilterMode>('normal');

  const nextMode: FilterMode =
    filterMode === 'normal'
      ? 'transition'
      : filterMode === 'transition'
        ? 'deferred'
        : 'normal';

  return (
    <>
      {/* Normal */}
      {filterMode === 'normal' && <FilterBar onFilter={onFilter} />}

      {/* Transition */}
      {filterMode === 'transition' && (
        <FilterBarUsingTransition onFilter={onFilter} />
      )}

      {/* Deferred */}
      {filterMode === 'deferred' && (
        <FilterBarUsingDeferredValue onFilter={onFilter} />
      )}

      {/* Mode Switch */}
      <button
        type="button"
        className="w-fit text-xs text-left cursor-pointer font-semibold underline"
        onClick={() => setFilterMode(nextMode)}
      >
        Switch to{' '}
        <span
          className={
            nextMode === 'normal'
              ? 'text-red-700'
              : nextMode === 'transition'
                ? 'text-green-700'
                : 'text-blue-700'
          }
        >
          {nextMode}
        </span>
      </button>
    </>
  );
}
