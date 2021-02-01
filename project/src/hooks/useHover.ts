import { RefObject, useEffect, useMemo, useRef } from "react";
import { useBool } from "./useBool";

/**
 * 使用元素 hover 状态
 * @param ref 目标元素 ref 引用
 * @param delay 延时防抖
 */
export function useHover(ref: RefObject<HTMLElement | null>, delay?: number): boolean {
  const [state, toggle] = useBool(false);
  const timer = useRef<number | null>(null);

  const handleEnter = useMemo(() => {
    if (delay) {
      return () => {
        timer.current = window.setTimeout(() => {
          toggle(true);
          if (timer.current) window.clearTimeout(timer.current);
        }, delay);
      };
    } else {
      return () => toggle(true);
    }
  }, [delay]);

  const handleLeave = useMemo(() => {
    if (delay) {
      return () => {
        if (timer.current) window.clearTimeout(timer.current);
        toggle(false);
      };
    } else {
      return () => toggle(false);
    }
  }, [delay]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.addEventListener("mouseenter", handleEnter, false);
    ref.current.addEventListener("mouseleave", handleLeave, false);

    return () => {
      if (!ref.current) return;
      ref.current.removeEventListener("mouseenter", handleEnter, false);
      ref.current.removeEventListener("mouseleave", handleLeave, false);
    };
  }, [ref]);

  return state;
}
