import { useCallback, useEffect, useState } from "react";

// 按照规范应该有一个 type 属性用来表示网络的连接方式, 但目前还未发现有支持此属性的浏览器
export interface NetworkState {
  isSupport: boolean; // 当前环境是否支持网络状态 API
  downlink: number; // 有效带宽估计值
  effectiveType: "slow-2g" | "2g" | "3g" | "4g"; // 链接类型
  rtt: number; // 有效往返时间预估值
  saveData: boolean; // 用户是否设置了减少数据使用量
}

type NetworkEvent = {
  target: NetworkInformation;
  type: "change";
};

type NetworkInformation = NetworkState & {
  addEventListener(
    type: NetworkEvent["type"],
    listener: (event: NetworkEvent) => void,
    options: boolean | AddEventListenerOptions
  ): void;

  removeEventListener(
    type: NetworkEvent["type"],
    listener: (event: NetworkEvent) => void,
    options: EventListenerOptions | boolean
  ): void;
};

type NavigatorWithNetwork = Navigator & {
  connection: NetworkInformation;
};

/**
 * 使用设备网络状态
 */
export function useNetwork(): NetworkState {
  const isSupport = navigator && "connection" in navigator;

  const [state, setState] = useState<NetworkState>({
    isSupport: isSupport,
    downlink: 0,
    effectiveType: "4g",
    rtt: 0,
    saveData: false,
  });

  const listener = useCallback(
    (event: NetworkEvent) => {
      setState({
        isSupport: isSupport,
        downlink: event.target.downlink,
        effectiveType: event.target.effectiveType,
        rtt: event.target.rtt,
        saveData: event.target.saveData,
      });
    },
    [isSupport]
  );

  // 初始化状态
  useEffect(() => {
    if (!isSupport) return;
    listener({
      type: "change",
      target: (navigator as NavigatorWithNetwork).connection,
    });
  }, [isSupport, listener]);

  // 注册事件
  useEffect(() => {
    if (!isSupport) return;
    const connection = (navigator as NavigatorWithNetwork).connection;

    connection.addEventListener("change", listener, false);

    return () => {
      connection.removeEventListener("change", listener, false);
    };
  }, [isSupport, listener]);

  return state;
}
