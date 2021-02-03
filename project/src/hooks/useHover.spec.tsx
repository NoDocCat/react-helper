import React, { useRef } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useHover } from "./useHover";

const NoDelayUseDemo: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isHover = useHover(ref);

  return (
    <div ref={ref} data-testid="target">
      {String(isHover)}
    </div>
  );
};

describe("hooks/useHover", () => {
  it("no delay use", () => {
    render(<NoDelayUseDemo />);

    const target = screen.queryByTestId("target");
    expect(target).toHaveTextContent("false");

    fireEvent.mouseEnter(target as HTMLDivElement);
    expect(target).toHaveTextContent("true");

    fireEvent.mouseLeave(target as HTMLDivElement);
    expect(target).toHaveTextContent("false");
  });
});
