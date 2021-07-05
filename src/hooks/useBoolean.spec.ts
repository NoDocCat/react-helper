import { act, renderHook } from "@testing-library/react-hooks";
import { useBoolean } from "./useBoolean";

describe("hooks/useBoolean", () => {
  test("无参数测试", () => {
    const { result } = renderHook(() => useBoolean(true));
    expect(result.current[0]).toBe(true);

    const [, dispatch] = result.current;

    act(() => dispatch());
    expect(result.current[0]).toBe(false);

    act(() => dispatch());
    expect(result.current[0]).toBe(true);
  });

  test("有参数测试", () => {
    const { result } = renderHook(() => useBoolean(false));
    expect(result.current[0]).toBe(false);

    const [, dispatch] = result.current;

    act(() => dispatch(false));
    expect(result.current[0]).toBe(false);

    act(() => dispatch(true));
    expect(result.current[0]).toBe(true);
  });
});
