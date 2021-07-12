import { act, renderHook } from "@testing-library/react-hooks";
import { useNetwork } from "./useNetwork";
import { NetworkMock } from "jest-network-mock";

describe("hooks/useNetwork", () => {
  afterEach(() => NetworkMock.clean());

  test("API 不支持时返回预设状态", () => {
    NetworkMock.clean();
    const { result } = renderHook(() => useNetwork());

    expect(result.current.type).toBe("wifi");
    expect(result.current.effectiveType).toBe("4g");
    expect(result.current.downlinkMax).toBe(10);
    expect(result.current.downlink).toBe(1.45);
    expect(result.current.rtt).toBe(300);
    expect(result.current.saveData).toBe(false);
  });

  test("初始状态获取", () => {
    NetworkMock.mock();
    NetworkMock.dispatch({ type: "cellular", rtt: 600, effectiveType: "slow-2g" });
    const { result } = renderHook(() => useNetwork());

    expect(result.current.type).toBe("cellular");
    expect(result.current.effectiveType).toBe("slow-2g");
    expect(result.current.downlinkMax).toBe(10);
    expect(result.current.downlink).toBe(1.45);
    expect(result.current.rtt).toBe(600);
    expect(result.current.saveData).toBe(false);
  });

  test("变更事件处理", () => {
    NetworkMock.mock();
    const { result } = renderHook(() => useNetwork());

    act(() => {
      NetworkMock.dispatch({ type: "mixed", effectiveType: "slow-2g", downlinkMax: 5 });
      NetworkMock.dispatch({ downlink: 0.5, rtt: 600, saveData: true });
    });

    expect(result.current.type).toBe("mixed");
    expect(result.current.effectiveType).toBe("slow-2g");
    expect(result.current.downlinkMax).toBe(5);
    expect(result.current.downlink).toBe(0.5);
    expect(result.current.rtt).toBe(600);
    expect(result.current.saveData).toBe(true);
  });
});
