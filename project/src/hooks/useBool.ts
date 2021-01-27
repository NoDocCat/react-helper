import { useState } from "react";

/**
 * 使用一个布尔状态
 * @param init 状态初始值
 */
export function useBool(init: boolean): [boolean, (value?: boolean) => void] {
  const [state, setState] = useState<boolean>(init);

  // 当传入布尔值时使用此值, 否则取反当前状态
  const toggle = (value?: boolean) => {
    setState(typeof value === "boolean" ? value : !state);
  };

  return [state, toggle];
}