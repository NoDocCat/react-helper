import { useEffect, useState } from "react";

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
  const isSupport = typeof navigator !== "undefined" && "getBattery" in navigator;
  const [batteryManager, setBatteryManager] = useState<BatteryManager | null>(null);

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

    // todo: 这是防止内存泄露的临时做法, 后期考虑尝试使用 Generator 解决这个问题
    let isCancelled = false;

    (navigator as NavigatorWithBattery).getBattery().then(manager => {
      if (isCancelled) return;
      listener({ type: "chargingchange", target: manager });
      setBatteryManager(manager);
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  // 注册事件
  useEffect(() => {
    if (!batteryManager) return;

    batteryManager.addEventListener("chargingchange", listener, false);
    batteryManager.addEventListener("chargingtimechange", listener, false);
    batteryManager.addEventListener("dischargingtimechange", listener, false);
    batteryManager.addEventListener("levelchange", listener, false);

    return () => {
      batteryManager.removeEventListener("chargingchange", listener, false);
      batteryManager.removeEventListener("chargingtimechange", listener, false);
      batteryManager.removeEventListener("dischargingtimechange", listener, false);
      batteryManager.removeEventListener("levelchange", listener, false);
    };
  }, [batteryManager]);

  return state;
}
