import React from "react";
import { useOnline } from "@ndct/react-helper";

export default function UseOnlineDemo(): React.ReactElement {
  const online = useOnline();

  return <span>在线状态: {String(online)}</span>;
}
