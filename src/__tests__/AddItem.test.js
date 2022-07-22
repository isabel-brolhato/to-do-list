import { render, screen } from '@testing-library/react';
import App from "../App";

//checking if list's length is longer than before
test('Adds element to list', () => {
    render(<App />);
    const numOfItems = document.querySelectorAll('.item');
    const itemsLength = numOfItems.length;
    expect(itemsLength).toBeGreaterThan(3);
  });

//checking if new item is added to list
  test('Adds element to list', () => {
    render(<App />);
    const input = document.querySelectorAll('.input');
    const newItem = input.value;
    const list = document.querySelectorAll('.list');
    expect(list).toContain(newItem);
  });

