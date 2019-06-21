import React, { useContext } from 'react';

function useHook(passedContext) {
  const context = useContext(passedContext);
  if (!context) {
    throw new Error(`Use Statement must be used within a Provider`);
  }
  return context;
}

function ContextValue<T>(initialState) {
  const [state, setState] = React.useState<T>(initialState);
  const value = React.useMemo(() => [state, setState], [state]);
  return value;
}
export { useHook, ContextValue };
