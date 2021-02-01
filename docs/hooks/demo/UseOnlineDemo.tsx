import React from "react";
import { useOnline } from "@ndct/react-helper";

export const UseOnlineDemo: React.FC = () => {
  const state = useOnline();

  return <div>在线状态: {String(state)}</div>;
};
