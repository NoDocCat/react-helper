import React from "react";
import { useBattery } from "@ndct/react-helper";

export default function UseBatteryDemo(): React.ReactElement {
  const state = useBattery();

  return (
    <ul>
      <li>充电状态: {String(state.charging)}</li>
      <li>还需充电: {state.chargingTime} 秒</li>
      <li>还可使用: {state.dischargingTime} 秒</li>
      <li>当前电量: {state.level * 100} %</li>
    </ul>
  );
}
