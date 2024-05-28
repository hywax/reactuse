import React from 'react';

/**
 * @name useIsFirstRender
 * @description - Hook that returns true if the component is first render
 *
 * @returns {boolean} True if the component is first render
 *
 * @example
 * const isFirstRender = useIsFirstRender();
 */
export const useIsFirstRender = () => {
  const renderRef = React.useRef(true);

  if (renderRef.current === true) {
    renderRef.current = false;
    return true;
  }

  return renderRef.current;
};
