import React from "react";
import { useBool } from "@ndct/react-helper";

export const UseBoolDemo: React.FC = () => {
  const [state, toggle] = useBool(true);

  return (
    <div>
      <div>当前状态: {String(state)}</div>
      <button onClick={() => toggle()}>切换状态</button>
      <button onClick={() => toggle(true)}>切换为 true</button>
      <button onClick={() => toggle(false)}>切换为 false</button>
    </div>
  );
};
