import React from "react";
import { useBattery } from "@ndct/react-helper";

export const UseBatteryDemo = () => {
  const state = useBattery();

  return (
    <ul>
      <li>API支持: {state.isSupport ? "支持" : "不支持"}</li>
      <li>充电状态: {state.charging ? "充电中" : "未充电"}</li>
      <li>还需充电: {state.chargingTime} 秒</li>
      <li>还可使用: {state.dischargingTime} 秒</li>
      <li>当前电量: {state.level * 100} %</li>
    </ul>
  );
};
