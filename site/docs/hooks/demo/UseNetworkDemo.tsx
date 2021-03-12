import React from "react";
import { useNetwork } from "@ndct/react-helper";

export const UseNetworkDemo: React.FC = () => {
  const state = useNetwork();

  return (
    <ul>
      <li>API支持: {String(state.isSupport)}</li>
      <li>有效带宽估值: {state.downlink} Mbps</li>
      <li>链接类型: {state.effectiveType}</li>
      <li>往返时间估值: {state.rtt} ms</li>
      <li>减少数据使用量: {String(state.saveData)}</li>
    </ul>
  );
};
