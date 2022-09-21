import { render, fireEvent } from '@testing-library/react';
import QuantityBox from '../index';

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 10;

test('renders QuantityBox with default props', () => {
    const { getByTestId } = render(<QuantityBox />);

    const quantity =  getByTestId('quantity-box').innerHTML;
    const decreaseButton =  getByTestId('quantity-decrease');
    const increaseButton =  getByTestId('quantity-increase');

    expect(quantity).toEqual('1');
    expect(decreaseButton.disabled).toEqual(true);
    expect(increaseButton.disabled).toEqual(false);
});

test('increase/decrease quantity by 1', () => {
    const { getByTestId } = render(<QuantityBox />);

    const decreaseButton =  getByTestId('quantity-decrease');
    const increaseButton =  getByTestId('quantity-increase');

    expect(getByTestId('quantity-box').innerHTML).toEqual(1);

    fireEvent.click(increaseButton);

    expect(getByTestId('quantity-box').innerHTML).toEqual(2);

    fireEvent.click(decreaseButton);

    expect(getByTestId('quantity-box').innerHTML).toEqual(1);
});

test('should not exceed max quantity', () => {
    const { getByTestId } = render(<QuantityBox  initialQuantity={10} />);
    const increaseButton =  getByTestId('quantity-increase');
 
    fireEvent.click(increaseButton);

    expect(getByTestId('quantity-box').innerHTML).toEqual(MAX_QUANTITY);
    expect(increaseButton.disabled).toEqual(true);
});
  
test('should not exceed min quantity', () => {
    const { getByTestId } = render(<QuantityBox  initialQuantity={1} />);
    const decreaseButton =  getByTestId('quantity-decrease');

    fireEvent.click(decreaseButton);

    expect(getByTestId('quantity-box').innerHTML).toEqual(MIN_QUANTITY);
    expect(decreaseButton.disabled).toEqual(true);
});

test('trigger a callback when quanity updated', () => {
    const callBack = jest.fn();
    const { getByTestId } = render(<QuantityBox  initialQuantity={5} />);
    const increaseButton =  getByTestId('quantity-increase');

    fireEvent.click(increaseButton);
    expect(callBack).toHaveBeenCalledTimes(1);
    expect(callBack).toHaveBeenCalledWith(6);
});