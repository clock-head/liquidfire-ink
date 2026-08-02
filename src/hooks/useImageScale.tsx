import { useState } from 'react';

export function useImageScale(
  initialScale: number = 400,
  expandedScale: number = 700,
  customScale: number | null = null,
) {
  const [scaleFactor, setScaleFactor] = useState(initialScale);
  const [customScaleFactor, setCustomScaleFactor] = useState(customScale);

  const expand = () => setScaleFactor(expandedScale);
  const collapse = () => setScaleFactor(initialScale);
  const standardToggle = () =>
    setScaleFactor((prev) =>
      prev === initialScale ? expandedScale : initialScale,
    );

  const toggleCustomScale = (scale: number) => {
    setCustomScaleFactor((prev) => (prev === scale ? null : scale));
  };

  return {
    scaleFactor,
    customScaleFactor,
    expand,
    collapse,
    standardToggle,
    toggleCustomScale,
  };
}
