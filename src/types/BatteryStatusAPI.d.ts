// W3C Spec Draft https://w3c.github.io/battery/
// W3C Editor's Draft 04 March 2021

// https://w3c.github.io/battery/#the-navigator-interface
declare interface Navigator {
  getBattery: () => Promise<BatteryManager>;
}

// https://w3c.github.io/battery/#the-batterymanager-interface
interface BatteryManager extends EventTarget {
  readonly charging: boolean;
  readonly chargingTime: number;
  readonly dischargingTime: number;
  readonly level: number;
  onchargingchange?: EventListener;
  onchargingtimechange?: EventListener;
  ondischargingtimechange?: EventListener;
  onlevelchange?: EventListener;
}
