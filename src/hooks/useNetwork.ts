import { useCallback, useEffect, useState } from "react";

export interface NetworkState {
  type: ConnectionType;
  effectiveType: EffectiveConnectionType;
  downlinkMax: Megabit;
  downlink: Megabit;
  rtt: Millisecond;
  saveData: boolean;
}

/**
 * 使用设备网络状态
 */
export function useNetwork(): NetworkState {
  const support = "connection" in navigator;
  const [state, setState] = useState<NetworkState>({
    type: "wifi",
    effectiveType: "4g",
    downlinkMax: 10,
    downlink: 1.45,
    rtt: 300,
    saveData: false,
  });

  const listener = useCallback<EventListener>(evt => {
    const target = evt.target as NetworkInformation;

    setState({
      type: target.type ?? "wifi",
      effectiveType: target.effectiveType ?? "4g",
      downlinkMax: target.downlinkMax ?? 10,
      downlink: target.downlink ?? 1.45,
      rtt: target.rtt ?? 300,
      saveData: target.saveData ?? false,
    });
  }, []);

  useEffect(() => {
    if (!support) return;
    const networkInformation = navigator.connection as NetworkInformation;
    const event: Event = { ...new Event("change"), target: networkInformation };

    listener(event);
  }, [listener, support]);

  useEffect(() => {
    if (!support) return;
    const networkInformation = navigator.connection as NetworkInformation;

    networkInformation.addEventListener("change", listener);

    return () => {
      networkInformation.removeEventListener("change", listener);
    };
  }, [listener, support]);

  return state;
}
