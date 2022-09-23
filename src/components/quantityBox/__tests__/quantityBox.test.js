import { fireEvent, render, screen } from '@testing-library/react';
import QuantityBox, { MAX_QUANTITY, MIN_QUANTITY } from '../index';

test('renders QuantityBox with default props', () => {
    render(<QuantityBox />);

    const quantity =  screen.getByTestId('quantity-box').innerHTML;
    const decreaseButton =  screen.getByTestId('quantity-decrease');
    const increaseButton =  screen.getByTestId('quantity-increase');

    expect(quantity).toEqual('1');
    expect(decreaseButton.disabled).toEqual(true);
    expect(increaseButton.disabled).toEqual(false);
});

test('increase/decrease quantity by 1', () => {
    render(<QuantityBox />);

    const decreaseButton =  screen.getByTestId('quantity-decrease');
    const increaseButton =  screen.getByTestId('quantity-increase');

    expect(screen.getByTestId('quantity-box').innerHTML).toEqual('1');

    fireEvent.click(increaseButton);

    expect(screen.getByTestId('quantity-box').innerHTML).toEqual('2');

    fireEvent.click(decreaseButton);

    expect(screen.getByTestId('quantity-box').innerHTML).toEqual('1');
});

test('should not exceed max quantity', () => {
    render(<QuantityBox  defaultQty={10} />);
    const increaseButton =  screen.getByTestId('quantity-increase');
 
    fireEvent.click(increaseButton);

    expect(screen.getByTestId('quantity-box').innerHTML).toEqual(MAX_QUANTITY.toString());
    expect(increaseButton.disabled).toEqual(true);
});
  
test('should not exceed min quantity', () => {
    render(<QuantityBox  defaultQty={1} />);
    const decreaseButton =  screen.getByTestId('quantity-decrease');

    fireEvent.click(decreaseButton);

    expect(screen.getByTestId('quantity-box').innerHTML).toEqual(MIN_QUANTITY.toString());
    expect(decreaseButton.disabled).toEqual(true);
});

test('trigger a callback when quanity updated', () => {
    const callBack = jest.fn();
    render(<QuantityBox  defaultQty={5} onChange={callBack} />);
    const increaseButton =  screen.getByTestId('quantity-increase');

    fireEvent.click(increaseButton);
    expect(callBack).toHaveBeenCalledTimes(1);
    expect(callBack).toHaveBeenCalledWith(6);
});

test('readonly mode', () => {
    render(<QuantityBox  qtyReadOnly={true} defaultQty={2} />);

    expect(screen.getByTestId('quantity-box').innerHTML).toEqual('2');
    expect(screen.queryByTestId(/quantity-increase/i)).toBeFalsy();
});