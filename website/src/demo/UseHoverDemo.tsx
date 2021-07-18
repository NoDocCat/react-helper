import React, { useRef } from "react";
import { useHover } from "@ndct/react-helper";

export default function UseHoverDemo(): React.ReactElement {
  const ref = useRef<HTMLSpanElement>(null);
  const hover = useHover(ref);

  return <span ref={ref}>{String(hover)}</span>;
}
