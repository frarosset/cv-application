import { useState, useLayoutEffect } from "react";

// This custom hooks is used to check if an element has overflow.

// The element is specified by ref parameter, which in turn is a reference
// to an element created with useRef() hook.

// The parameter isVerticalOverflow specifies whether the vertical or
// horizontal overflow is to be checked.

// The preCallback and postCallback callbacks can be specified, to perform
// an action before checking the overflow condition, or after that,
// respectively.

// If the browser supports ResizeObserver, the overflow condition is
// checked again.

// see: https://stackoverflow.com/a/70909891
// see: https://www.robinwieruch.de/react-custom-hook-check-if-overflow/

const useIsOverflow = (ref, isVerticalOverflow, postCallback, preCallback) => {
  const [isOverflow, setIsOverflow] = useState(undefined);

  useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      if (preCallback) preCallback();

      const { clientWidth, scrollWidth, clientHeight, scrollHeight } = current;

      const hasOverflow = isVerticalOverflow
        ? scrollHeight > clientHeight
        : scrollWidth > clientWidth;

      setIsOverflow(hasOverflow);

      if (postCallback) postCallback(hasOverflow);
    };

    if (current) {
      if ("ResizeObserver" in window) {
        new ResizeObserver(trigger).observe(current);
      }

      trigger();
    }
  }, [postCallback, preCallback, ref, isVerticalOverflow]);

  return isOverflow;
};

export default useIsOverflow;
