import { render, screen } from "@testing-library/react";
import AddItem from "../Components/AddItem"

test("Should contain title", () => {
  render(<AddItem />);

  expect(screen.getByTestId("add-item")).toBeInTheDocument();
});

