import { useCallback, useEffect, useRef, useState } from "react";
import { useMeasureWidths, UseMeasureWidthsProps } from "./useMeasureWidths";

interface UseDynamicTextCalcProps extends UseMeasureWidthsProps {
  containerRef: React.RefObject<HTMLDivElement | null>
}

const useDynamicTextCalc = ({ containerRef,text,gap,font,reservedSpace}: UseDynamicTextCalcProps) => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [hiddenItems, setHiddenItems] = useState<string[]>([]);

  const itemWidths = useMeasureWidths({
    text: text,
    font: font
  });

  const updateVisibility = useCallback(() => {
    if (!containerRef.current) return;
    // debugger;
    const containerWidth = containerRef.current.offsetWidth;
    const reservedForMenu = reservedSpace ?? 40;
    const _gap = gap ?? 16;

    let total = 0;
    const visible: string[] = [];
    const hidden: string[] = [];

    for (let i = 0; i < text.length; i++) {
      const nextW = itemWidths[i] + (i > 0 ? _gap : 0);
      const condition = total + nextW + reservedForMenu;
      if (condition < containerWidth) {
        total += nextW;
        visible.push(text[i]);
      } else {
        hidden.push(text[i]);
      }
    }

    setVisibleItems(visible);
    setHiddenItems(hidden);
  }, [containerRef, itemWidths, text, gap, reservedSpace]);

  useEffect(() => {
    updateVisibility();
    const observer = new ResizeObserver(updateVisibility);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateVisibility]);

  return { visibleItems, hiddenItems };
};

export default useDynamicTextCalc;