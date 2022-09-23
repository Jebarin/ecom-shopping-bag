import { fireEvent, render, screen } from '@testing-library/react';
import LineItem from '../index';

test('renders empty', () => {
  render(<LineItem />);
  const elem = screen.queryByTestId(/line-item/i);

  expect(elem).not.toBeInTheDocument();
});

test('renders line item with callbacks', () => {
  const props = {
    "itemId": "7d0f8",
    "itemName": "Mens jeans",
    "quantity": 3,
    "salesPrice": 34,
    onRemoveItem: jest.fn()
  }
  
  render(<LineItem {...props} />);

  const elem = screen.queryByTestId(/line-item/i);

  expect(elem).toBeInTheDocument();
  expect(screen.getByText(/Mens jeans/i)).toBeInTheDocument();
  expect(screen.getByText(/Price \$34/i)).toBeInTheDocument();

  const removeButton = screen.queryByText(/Remove/i);
  fireEvent.click(removeButton);
  expect(props.onRemoveItem).toHaveBeenCalledTimes(1);
});

test('renders line item with save for later option', () => {
  const props = {
    "itemId": "7d0f8",
    "itemName": "Mens jeans",
    "quantity": 3,
    "salesPrice": 34,
    onMoveToWishListAction: jest.fn()
  }
  
  render(<LineItem {...props} />);

  const btnSaveForLater = screen.getByText(/Save For Later/i);
  fireEvent.click(btnSaveForLater);

  expect(btnSaveForLater).toBeInTheDocument();
  expect(props.onMoveToWishListAction).toHaveBeenCalledTimes(1);

  const btnMoveToBag = screen.queryByText(/Move To Bag/i);
  expect(btnMoveToBag).not.toBeInTheDocument();
});

test('renders line item with move to bag option', () => {
  const props = {
    "itemId": "7d0f8",
    "itemName": "Mens jeans",
    "quantity": 3,
    "salesPrice": 34,
    onRemoveFromWishListAction: jest.fn()
  }
  
  render(<LineItem {...props} />);

  const btnMoveToBag = screen.queryByText(/Move To Bag/i);
  fireEvent.click(btnMoveToBag);

  expect(btnMoveToBag).toBeInTheDocument();
  expect(props.onRemoveFromWishListAction).toHaveBeenCalledTimes(1);

  const btnSaveForLater = screen.queryByText(/Save For Later/i);
  expect(btnSaveForLater).not.toBeInTheDocument();
});