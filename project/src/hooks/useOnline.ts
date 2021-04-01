import { useCallback, useEffect } from "react";
import { useBoolean } from "./useBoolean";

/**
 * 使用浏览器联网状态
 */
export function useOnline(): boolean {
  const [state, dispatch] = useBoolean(navigator.onLine);

  const listener = useCallback<EventListener>(
    evt => {
      dispatch(evt.type === "online");
    },
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener("online", listener);
    window.addEventListener("offline", listener);

    return () => {
      window.removeEventListener("online", listener);
      window.removeEventListener("offline", listener);
    };
  }, [listener]);

  return state;
}
