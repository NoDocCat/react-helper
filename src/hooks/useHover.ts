import { RefObject, useCallback, useEffect, useRef } from "react";
import { useBoolean } from "./useBoolean";

/**
 * 使用元素 hover 状态
 * @param ref   目标元素
 * @param delay 延时时长(毫秒)
 */
export function useHover(ref: RefObject<HTMLElement>, delay?: number): boolean {
  const [state, dispatch] = useBoolean(false);
  const timer = useRef<number>();

  const enterListener = useCallback(() => {
    if (!delay) {
      dispatch(true);
      return;
    }

    timer.current = window.setTimeout(() => {
      dispatch(true);
    }, delay);
  }, [delay, dispatch]);

  const leaveListener = useCallback(() => {
    if (delay && timer.current) {
      window.clearTimeout(timer.current);
      timer.current = undefined;
    }

    dispatch(false);
  }, [delay, dispatch]);

  useEffect(() => {
    if (!ref.current) return;
    const target = ref.current;

    target.addEventListener("mouseenter", enterListener);
    target.addEventListener("mouseleave", leaveListener);

    return () => {
      target.removeEventListener("mouseenter", enterListener);
      target.removeEventListener("mouseleave", leaveListener);
    };
  }, [enterListener, leaveListener, ref]);

  return state;
}
