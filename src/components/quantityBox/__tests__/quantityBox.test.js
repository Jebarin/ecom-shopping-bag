import { render, screen, fireEvent } from '@testing-library/react';
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

test('increase quantity by 1', () => {
    
});

test('decrease quantity by 1', () => {
    
});
  
test('should not exceed max quantity', () => {
    
});
  
test('should not exceed min quantity', () => {
     
});