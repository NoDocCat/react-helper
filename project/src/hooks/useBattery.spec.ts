import { renderHook } from "@testing-library/react-hooks";
import { useBattery } from "./useBattery";
import { BatteryMock } from "jest-battery-mock";

describe("hooks/useBattery", () => {
  afterEach(() => BatteryMock.clean());

  test("API 不支持时返回预设状态", () => {
    BatteryMock.clean();
    const { result } = renderHook(() => useBattery());

    expect(result.current.charging).toBe(true);
    expect(result.current.chargingTime).toBe(0);
    expect(result.current.dischargingTime).toBe(Infinity);
    expect(result.current.level).toBe(1);
  });

  test("初始状态获取", async () => {
    BatteryMock.mock();
    BatteryMock.dispatch("levelchange", { level: 0.5, charging: false });

    const { result, waitForNextUpdate } = renderHook(() => useBattery());
    await waitForNextUpdate();

    expect(result.current.charging).toBe(false);
    expect(result.current.chargingTime).toBe(0);
    expect(result.current.dischargingTime).toBe(Infinity);
    expect(result.current.level).toBe(0.5);
  });

  test("变更事件处理", async () => {
    BatteryMock.mock();
    const { result, waitForNextUpdate } = renderHook(() => useBattery());

    BatteryMock.dispatch("chargingchange", { charging: false });
    BatteryMock.dispatch("chargingtimechange", { chargingTime: Infinity });
    BatteryMock.dispatch("dischargingtimechange", { dischargingTime: 9999 });
    BatteryMock.dispatch("levelchange", { level: 0.7 });

    await waitForNextUpdate();

    expect(result.current.charging).toBe(false);
    expect(result.current.chargingTime).toBe(Infinity);
    expect(result.current.dischargingTime).toBe(9999);
    expect(result.current.level).toBe(0.7);
  });
});
