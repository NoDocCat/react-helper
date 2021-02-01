/**
 * 使用设备在线状态
 */
import { useBool } from "./useBool";
import { useCallback, useEffect } from "react";

export function useOnline(): boolean {
  const [state, toggle] = useBool(navigator.onLine);

  const listener = useCallback(() => {
    toggle(navigator.onLine);
  }, [toggle]);

  useEffect(() => {
    window.addEventListener("online", listener, false);
    window.addEventListener("offline", listener, false);

    return () => {
      window.removeEventListener("online", listener, false);
      window.removeEventListener("offline", listener, false);
    };
  }, [listener]);

  return state;
}
