import { render, screen, cleanup } from "@testing-library/react";
import ItemList from "../Components/ItemList";

let items;

beforeEach(() => {
    items = [{
        id: 1,
        checked: true,
        item: "Walk Tuco"
    },
    {
        id: 2,
        checked: false,
        item: "Item 2"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    }];
});

afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
});

test("Should have a list of items in the document", () => {
  render(<ItemList items={items} />);
  
  expect(screen.getByTestId('item-list')).toBeInTheDocument()
});
