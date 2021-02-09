import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Title from "../Title";

it("renders title", () => {
  render(<Title />);

  expect(screen.getByRole("heading")).toBeVisible(true);
});

describe("Title Header", () => {
  it("has the correct header text", () => {
    render(<Title />);

    const header = screen.getByRole("heading");

    fireEvent.change(header, { target: { text: "I am the header" } });
    expect(header.text).toBe("I am the header");
  });
});
