import { RefObject, useEffect, useMemo, useRef, useState } from "react";

/**
 * 使用元素 hover 状态
 * @param ref 目标元素 ref 引用
 * @param delay 延时防抖
 */
export function useHover(ref: RefObject<HTMLElement | null>, delay?: number): boolean {
  const [state, toggle] = useState<boolean>(false);
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
    const target = ref.current;

    target.addEventListener("mouseenter", handleEnter, false);
    target.addEventListener("mouseleave", handleLeave, false);

    return () => {
      target.removeEventListener("mouseenter", handleEnter, false);
      target.removeEventListener("mouseleave", handleLeave, false);
    };
  }, [handleEnter, handleLeave, ref]);

  return state;
}
