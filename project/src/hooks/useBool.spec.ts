import { act, renderHook } from "@testing-library/react-hooks";
import { useBool } from "./useBool";

describe("hooks/useBool", () => {
  it("toggle test", () => {
    const { result } = renderHook(() => useBool(false));
    const toggle = result.current[1];

    expect(result.current[0]).toBeFalsy();

    // 无参数测试
    act(() => toggle());
    expect(result.current[0]).toBeTruthy();
    act(() => toggle());
    expect(result.current[0]).toBeFalsy();

    // 有参数测试
    act(() => toggle(true));
    expect(result.current[0]).toBeTruthy();
    act(() => toggle(false));
    expect(result.current[0]).toBeFalsy();
  });
});
