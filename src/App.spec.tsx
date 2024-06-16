import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Applications", () => {
  test("renders heading", async () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Applications" })).toBeTruthy();
  });

  test("renders counter", async () => {
    render(<App />);
    expect(screen.getByTestId("appCounter"));
  });

  test("renders pie chart", async () => {
    render(<App />);
    expect(screen.getByTestId("pieChart")).toBeTruthy();
  });

  test("render table", async () => {
    render(<App />);
    expect(screen.findAllByRole("table")).toBeTruthy();
  });
});
