import { useMemo, useEffect, useState } from 'react';

export default function useResizeObserver(obserbableElementRef) {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const myObserver = useMemo(
    () =>
      new ResizeObserver((entries) => {
        setWidth(entries[0].contentRect.width);
        setHeight(entries[0].contentRect.height);
      }),
    []
  );

  useEffect(() => {
    if (obserbableElementRef.current) {
      myObserver.observe(obserbableElementRef.current);
    }
    return () => {
      myObserver.disconnect();
    };
  }, [myObserver, obserbableElementRef]);

  return {
    width,
    height,
  };
}
