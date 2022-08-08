import { render, screen } from "@testing-library/react";
import Title from "../Components/Title";

test("Should contain title", () => {
    render(<Title />);
    
    expect(screen.getByTestId('title')).toBeInTheDocument()
  });