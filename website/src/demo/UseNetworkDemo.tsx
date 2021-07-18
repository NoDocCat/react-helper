import React from "react";
import { useNetwork } from "@ndct/react-helper";

export default function UseNetworkDemo(): React.ReactElement {
  const state = useNetwork();

  return (
    <ul>
      <li>连接方式: {state.type}</li>
      <li>连接类型: {state.effectiveType}</li>
      <li>最大带宽估值: {state.downlinkMax} Mbps</li>
      <li>有效带宽估值: {state.downlink} Mbps</li>
      <li>往返时间估值: {state.rtt} ms</li>
      <li>节流开关: {String(state.saveData)}</li>
    </ul>
  );
}
