import { act, renderHook } from "@testing-library/react-hooks";
import { useOnline } from "./useOnline";

describe("hooks/useOnline", () => {
  it("event test", () => {
    const { result } = renderHook(() => useOnline());

    expect(result.current).toBe(navigator.onLine);

    // 模拟离线在线事件
    act(() => {
      window.dispatchEvent(new Event("offline"));
    });
    expect(result.current).toBeFalsy();

    act(() => {
      window.dispatchEvent(new Event("online"));
    });
    expect(result.current).toBeTruthy();
  });
});
