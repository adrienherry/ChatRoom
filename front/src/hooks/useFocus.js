/* eslint-disable import/prefer-default-export */

import { useRef, useEffect } from 'react';

export const useFocus = (deps = []) => {
  const ref = useRef();

  useEffect(
    () => {
      ref.current.focus();
    },
    deps,
  );

  return ref;
};
