import { getByTestId, render, screen } from "@testing-library/react";
import Title from "../Components/Title";

test("Should contain title", () => {
  render(<Title />);

  expect(screen.getByTestId("title")).toBeInTheDocument();
});

test("Should have a title 'To Do List'", () => {
  render(<Title />);

  expect.stringMatching(/To Do List/);
});

