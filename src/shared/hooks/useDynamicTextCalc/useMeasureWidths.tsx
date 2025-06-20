"use client";

import { useMemo } from "react";

type NonEmptyArrayString = [string, ...string[]];

export interface UseMeasureWidthsProps {
  readonly text: NonEmptyArrayString,
  readonly gap?: number,
  readonly reservedSpace?: number
  readonly font?:{
    readonly size?: string; // без px
    readonly weight?: string;
    readonly family?: string; // шрифт
    readonly style?: string; // стиль шрифта, например, italic
    readonly variant?: string; // вариант шрифта, например, condensed
    readonly lineHeight?: string; // высота строки
    readonly letterSpacing?: string; // межбуквенный интервал    
  }
}
export const useMeasureWidths = ({ text, gap, reservedSpace, font }: UseMeasureWidthsProps): number[] => {
  const widths = useMemo(() => {
    if (typeof document === "undefined") return [];

    const span = document.createElement("span");
    span.style.visibility = "hidden";
    span.style.position = "absolute";
    span.style.whiteSpace = "nowrap";
    span.style.fontSize = font?.size ? `${font.size}px` : "14px";
    span.style.fontWeight = font?.weight || "400";
    span.style.fontFamily = font?.family || "sans-serif";
    span.style.fontStyle = font?.style || "normal";
    span.style.fontVariant = font?.variant || "normal";
    span.style.lineHeight = font?.lineHeight || "normal";
    span.style.letterSpacing = font?.letterSpacing || "normal";
    span.style.padding = "0";
    span.style.margin = "0";
    span.style.border = "none";

    document.body.appendChild(span);

    const result = text.map((label) => {
      span.innerText = label;
      return span.offsetWidth + (gap || 0) + (reservedSpace || 0);
    });

    document.body.removeChild(span);

    return result;
  }, [
    text, // зависит от ссылки на массив (если не стабилен — вынести в useMemo выше)
    gap,
    reservedSpace,
    font?.size,
    font?.weight,
    font?.family,
    font?.style,
    font?.variant,
    font?.lineHeight,
    font?.letterSpacing
  ]);

  return widths;
};
