import { useEffect, useRef, useState } from "react";

export interface BatteryState {
  isSupport: boolean; // 当前环境是否支持电池 API
  charging: boolean; // 充电状态
  chargingTime: number; // 距离充电完毕还需多少秒
  dischargingTime: number; // 距离电池耗尽还需多少秒
  level: number; // 电量放大等级
}

type BatteryEvent = {
  target: BatteryManager;
  type: "chargingchange" | "chargingtimechange" | "dischargingtimechange" | "levelchange";
};

type BatteryManager = BatteryState & {
  addEventListener(
    type: BatteryEvent["type"],
    listener: (event: BatteryEvent) => void,
    options?: boolean | AddEventListenerOptions
  ): void;

  removeEventListener(
    type: BatteryEvent["type"],
    callback: (event: BatteryEvent) => void,
    options?: EventListenerOptions | boolean
  ): void;
};

type NavigatorWithBattery = Navigator & {
  getBattery: () => Promise<BatteryManager>;
};

/**
 * 使用设备电池状态
 */
export function useBattery(): BatteryState {
  const isSupport = navigator && "getBattery" in navigator;
  const batteryManager = useRef<BatteryManager | null>(null);

  const [state, setState] = useState<BatteryState>({
    isSupport: isSupport,
    charging: false,
    chargingTime: 0,
    dischargingTime: 0,
    level: 0,
  });

  const listener = (event: BatteryEvent) => {
    setState({
      isSupport: isSupport,
      charging: event.target.charging,
      chargingTime: event.target.chargingTime,
      dischargingTime: event.target.dischargingTime,
      level: event.target.level,
    });
  };

  // 初始化状态
  useEffect(() => {
    if (!isSupport) return;

    (navigator as NavigatorWithBattery).getBattery().then(manager => {
      listener({ type: "chargingchange", target: manager });
      batteryManager.current = manager;
    });
  }, []);

  // 注册事件
  useEffect(() => {
    if (!batteryManager.current) return;

    const manager: BatteryManager = batteryManager.current;

    manager.addEventListener("chargingchange", listener, false);
    manager.addEventListener("chargingtimechange", listener, false);
    manager.addEventListener("dischargingtimechange", listener, false);
    manager.addEventListener("levelchange", listener, false);

    return () => {
      manager.removeEventListener("chargingchange", listener, false);
      manager.removeEventListener("chargingtimechange", listener, false);
      manager.removeEventListener("dischargingtimechange", listener, false);
      manager.removeEventListener("levelchange", listener, false);
    };
  }, [batteryManager]);

  return state;
}
