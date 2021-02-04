import { renderHook } from "@testing-library/react-hooks";
import { useBattery } from "./useBattery";

describe("hooks/useBattery", () => {
  it("not support", () => {
    // todo: 此处需要寻找一个方法明确隐藏 navigator.getBattery, 以防止 jsdom 后续更新加入相关 api 模拟导致测试失败
    const { result } = renderHook(() => useBattery());
    expect(result.current.isSupport).toBeFalsy();
  });

  it("default state get", async () => {
    // mock
    const state = {
      charging: true,
      chargingTime: 20,
      dischargingTime: Infinity,
      level: 99,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };

    Object.defineProperty(navigator, "getBattery", {
      get: () => () => Promise.resolve(state),
      configurable: true,
    });

    const { result, waitForNextUpdate } = renderHook(() => useBattery());
    expect(result.current.isSupport).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.charging).toBe(state.charging);
    expect(result.current.chargingTime).toBe(state.chargingTime);
    expect(result.current.dischargingTime).toBe(state.dischargingTime);
    expect(result.current.level).toBe(state.level);

    // clean mock
    if ("getBattery" in navigator) {
      delete navigator["getBattery"];
    }
  });

  it("event test", () => {
    // todo: 寻找模拟事件的方法
  });
});
