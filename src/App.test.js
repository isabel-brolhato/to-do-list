import { render, screen } from '@testing-library/react';
import App from "./App";

//checking the number of elements before we start testing
test('Check number of elements on the list before starting tests', () => {
    render(<App />);
    const numOfItems = document.querySelectorAll('.item');
    const itemsLength = numOfItems.length;
    expect(itemsLength).toBe(3);
  });

//checking if new item is added to list
  // test('Adds element to list', () => {
  //   render(<App />);

  //   const input = document.querySelectorAll('.input');
  //   const newItem = input.value;
  //   const list = document.querySelectorAll('.list');
  //   expect(list).toContain(newItem);
  // });

