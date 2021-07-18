import React from "react";
import { useBoolean } from "@ndct/react-helper";

export default function UseBooleanDemo(): React.ReactElement {
  const [state, dispatch] = useBoolean(false);

  return (
    <>
      <span>当前状态: {String(state)}</span>
      <div>
        <button onClick={() => dispatch()}>切换状态</button>
        <button onClick={() => dispatch(true)}>置为 True</button>
        <button onClick={() => dispatch(false)}>置为 False</button>
      </div>
    </>
  );
}
