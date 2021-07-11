import React, { useRef } from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useHover } from "./useHover";

jest.useFakeTimers();

describe("hooks/useHover", () => {
  test("无延时使用", () => {
    const View: React.FC = () => {
      const ref = useRef<HTMLSpanElement>(null);
      const isHover = useHover(ref);

      return (
        <span ref={ref} data-testid="target">
          {String(isHover)}
        </span>
      );
    };

    render(<View />);

    const target = screen.queryByTestId("target");
    expect(target).toHaveTextContent("false");

    fireEvent.mouseEnter(target as HTMLElement);
    expect(target).toHaveTextContent("true");

    fireEvent.mouseLeave(target as HTMLElement);
    expect(target).toHaveTextContent("false");
  });

  test("延时使用", () => {
    const View: React.FC = () => {
      const ref = useRef<HTMLSpanElement>(null);
      const isHover = useHover(ref, 5000);

      return (
        <span ref={ref} data-testid="target">
          {String(isHover)}
        </span>
      );
    };

    render(<View />);

    const target = screen.queryByTestId("target");
    expect(target).toHaveTextContent("false");

    // 延时内移开
    fireEvent.mouseEnter(target as HTMLElement);
    expect(target).toHaveTextContent("false");

    act(() => {
      jest.advanceTimersByTime(4999);
    });
    expect(target).toHaveTextContent("false");

    fireEvent.mouseLeave(target as HTMLElement);
    expect(target).toHaveTextContent("false");

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(target).toHaveTextContent("false");

    // 延时外移开
    fireEvent.mouseEnter(target as HTMLElement);
    expect(target).toHaveTextContent("false");

    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(target).toHaveTextContent("true");

    fireEvent.mouseLeave(target as HTMLElement);
    expect(target).toHaveTextContent("false");
  });
});
