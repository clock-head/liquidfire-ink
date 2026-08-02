import { useState } from 'react';

export function useEnteredState(initialState: boolean = false) {
  const [isEntered, setIsEntered] = useState(initialState);

  return {
    isEntered,
    setIsEntered,
  };
}
