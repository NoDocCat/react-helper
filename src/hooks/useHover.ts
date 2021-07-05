import { RefObject, useCallback, useEffect, useRef, useState } from "react";

/**
 * 使用元素 hover 状态
 * @param ref 目标元素 ref 引用
 * @param delay 延时防抖
 */
export function useHover(ref: RefObject<HTMLElement | null>, delay?: number): boolean {
  const [state, setState] = useState<boolean>(false);
  const timer = useRef<number | null>(null);

  const cleanTimer = () => {
    if (!timer.current) return;
    window.clearTimeout(timer.current);
    timer.current = null;
  };

  const enterListener = useCallback(() => {
    cleanTimer();

    if (!delay) {
      setState(true);
      return;
    }

    timer.current = window.setTimeout(() => {
      setState(true);
      cleanTimer();
    }, delay);
  }, [delay]);

  const leaveListener = useCallback(() => {
    cleanTimer();
    setState(false);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const target = ref.current;

    target.addEventListener("mouseenter", enterListener, false);
    target.addEventListener("mouseleave", leaveListener, false);

    return () => {
      target.removeEventListener("mouseenter", enterListener, false);
      target.removeEventListener("mouseleave", leaveListener, false);
    };
  }, [enterListener, leaveListener, ref]);

  return state;
}
