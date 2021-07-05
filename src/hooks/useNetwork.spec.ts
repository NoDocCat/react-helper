import { renderHook } from "@testing-library/react-hooks";
import { useNetwork } from "./useNetwork";

describe("hooks/useNetwork", () => {
  it("not support", () => {
    // todo: 此处需要寻找一个方法明确隐藏 navigator.connection, 以防止 jsdom 后续更新加入相关 api 模拟导致测试失败
    const { result } = renderHook(() => useNetwork());
    expect(result.current.isSupport).toBeFalsy();
  });

  it("default state get", () => {
    // mock
    const state = {
      downlink: 5,
      effectiveType: "4g",
      rtt: 150,
      saveData: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };

    Object.defineProperty(navigator, "connection", { get: () => state, configurable: true });

    const { result } = renderHook(() => useNetwork());
    expect(result.current.isSupport).toBeTruthy();
    expect(result.current.downlink).toBe(state.downlink);
    expect(result.current.effectiveType).toBe(state.effectiveType);
    expect(result.current.rtt).toBe(state.rtt);
    expect(result.current.saveData).toBe(state.saveData);

    // clean mock
    if ("connection" in navigator) {
      delete navigator["connection"];
    }
  });

  it("event test", () => {
    // todo: 寻找模拟事件的方法
  });
});
