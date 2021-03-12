import React, { useRef } from "react";
import { useHover } from "@ndct/react-helper";

export const UseHoverDemo: React.FC = () => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const state = useHover(ref);

  return <span ref={ref}>{String(state)}</span>;
};