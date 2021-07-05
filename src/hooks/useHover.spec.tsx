import React, { useRef } from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useHover } from "./useHover";

const NoDelay: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isHover = useHover(ref);

  return (
    <div ref={ref} data-testid="target">
      {String(isHover)}
    </div>
  );
};

const Delay: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isHover = useHover(ref, 5000);

  return (
    <div ref={ref} data-testid="target">
      {String(isHover)}
    </div>
  );
};

jest.useFakeTimers();

describe("hooks/useHover", () => {
  it("no delay use", () => {
    render(<NoDelay />);

    const target = screen.queryByTestId("target");
    expect(target).toHaveTextContent("false");

    fireEvent.mouseEnter(target as HTMLDivElement);
    expect(target).toHaveTextContent("true");

    fireEvent.mouseLeave(target as HTMLDivElement);
    expect(target).toHaveTextContent("false");
  });

  it("delay use", () => {
    render(<Delay />);

    const target = screen.queryByTestId("target");
    expect(target).toHaveTextContent("false");

    // 延时内移开
    fireEvent.mouseEnter(target as HTMLDivElement);
    expect(target).toHaveTextContent("false");

    act(() => {
      jest.advanceTimersByTime(4999);
    });
    expect(target).toHaveTextContent("false");

    fireEvent.mouseLeave(target as HTMLDivElement);
    expect(target).toHaveTextContent("false");

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(target).toHaveTextContent("false");

    // 延时外移开
    fireEvent.mouseEnter(target as HTMLDivElement);
    expect(target).toHaveTextContent("false");

    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(target).toHaveTextContent("true");

    fireEvent.mouseLeave(target as HTMLDivElement);
    expect(target).toHaveTextContent("false");
  });
});
