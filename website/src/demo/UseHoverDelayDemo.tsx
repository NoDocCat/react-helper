import React, { useRef } from "react";
import { useHover } from "@ndct/react-helper";

export default function UseHoverDelayDemo(): React.ReactElement {
  const ref = useRef<HTMLSpanElement>(null);
  const hover = useHover(ref, 2000);

  return <span ref={ref}>{String(hover)}</span>;
}
