import { useCallback, useState } from "react";

type Dispatch = (value?: boolean) => void;

/**
 * 使用 Boolean 状态
 * @param initState 初始状态
 */
export function useBoolean(initState: boolean): [boolean, Dispatch] {
  const [state, setState] = useState(initState);

  const dispatch = useCallback<Dispatch>(value => {
    setState(prevState => (typeof value === "boolean" ? value : !prevState));
  }, []);

  return [state, dispatch];
}
