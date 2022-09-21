import { render, fireEvent } from '@testing-library/react';
import QuantityBox, {MIN_QUANTITY, MAX_QUANTITY } from '../index';

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

    expect(getByTestId('quantity-box').innerHTML).toEqual('1');

    fireEvent.click(increaseButton);

    expect(getByTestId('quantity-box').innerHTML).toEqual('2');

    fireEvent.click(decreaseButton);

    expect(getByTestId('quantity-box').innerHTML).toEqual('1');
});

test('should not exceed max quantity', () => {
    const { getByTestId } = render(<QuantityBox  defaultQty={10} />);
    const increaseButton =  getByTestId('quantity-increase');
 
    fireEvent.click(increaseButton);

    expect(getByTestId('quantity-box').innerHTML).toEqual(MAX_QUANTITY.toString());
    expect(increaseButton.disabled).toEqual(true);
});
  
test('should not exceed min quantity', () => {
    const { getByTestId } = render(<QuantityBox  defaultQty={1} />);
    const decreaseButton =  getByTestId('quantity-decrease');

    fireEvent.click(decreaseButton);

    expect(getByTestId('quantity-box').innerHTML).toEqual(MIN_QUANTITY.toString());
    expect(decreaseButton.disabled).toEqual(true);
});

test('trigger a callback when quanity updated', () => {
    const callBack = jest.fn();
    const { getByTestId } = render(<QuantityBox  defaultQty={5} onChange={callBack} />);
    const increaseButton =  getByTestId('quantity-increase');

    fireEvent.click(increaseButton);
    expect(callBack).toHaveBeenCalledTimes(1);
    expect(callBack).toHaveBeenCalledWith(6);
});