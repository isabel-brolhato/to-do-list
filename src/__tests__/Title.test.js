import { render, screen } from "@testing-library/react";
import Title from "../Components/Title";

test("Should contain title", () => {
  render(<Title />);

  expect(screen.getByTestId("title")).toBeInTheDocument();
});

test("Should have a title 'To Do List'", () => {
  render(<Title />);
  const title = document.querySelector("[data-testid=title]");
  expect(title.innerHTML).toBe("To Do List");

});

