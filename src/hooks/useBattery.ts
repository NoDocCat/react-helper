import { useCallback, useEffect, useState } from "react";

export type BatteryState = { charging: boolean; chargingTime: number; dischargingTime: number; level: number };

/**
 * 使用设备电池状态
 */
export function useBattery(): BatteryState {
  const support = "getBattery" in navigator;
  const [manager, setManager] = useState<BatteryManager | null>(null);
  const [state, setState] = useState<BatteryState>({
    charging: true,
    chargingTime: 0,
    dischargingTime: Infinity,
    level: 1,
  });

  const listener = useCallback<EventListener>(evt => {
    const target = evt.target as BatteryManager;

    setState({
      charging: target.charging,
      chargingTime: target.chargingTime,
      dischargingTime: target.dischargingTime,
      level: target.level,
    });
  }, []);

  useEffect(() => {
    if (!support) return;
    let destroy = false;

    (async function () {
      const batteryManager = await navigator.getBattery();
      const event: Event = { ...new Event("levelchange"), target: batteryManager };

      if (destroy) return;
      setManager(batteryManager);
      listener(event);
    })();

    return () => (destroy = true) && undefined;
  }, [listener, support]);

  useEffect(() => {
    if (!manager) return;

    manager.addEventListener("chargingchange", listener);
    manager.addEventListener("chargingtimechange", listener);
    manager.addEventListener("dischargingtimechange", listener);
    manager.addEventListener("levelchange", listener);

    return () => {
      manager.removeEventListener("chargingchange", listener);
      manager.removeEventListener("chargingtimechange", listener);
      manager.removeEventListener("dischargingtimechange", listener);
      manager.removeEventListener("levelchange", listener);
    };
  }, [listener, manager]);

  return state;
}
