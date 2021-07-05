import { act, renderHook } from "@testing-library/react-hooks";
import { useOnline } from "./useOnline";

describe("hooks/useOnline", () => {
  test("事件测试", () => {
    const { result } = renderHook(() => useOnline());
    expect(result.current).toBe(navigator.onLine);

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
