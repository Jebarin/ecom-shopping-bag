import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../index';

test('renders Button with default props', () => {
  render(<Button />);
  const elem = screen.getByText(/submit/i);

  expect(elem).toBeInTheDocument();
  expect(elem.disabled).toEqual(false);
  expect(elem.type).toEqual('button');
});

test('renders Button with custom props', () => {
    render(<Button action="submit">click me</Button>);

    const elem = screen.getByText(/click me/i);
    expect(elem).toBeInTheDocument();
    expect(elem.type).toEqual('submit');
});

test('button should be clickable', () => {
    const callBack = jest.fn();
    render(<Button onClick={callBack} />);

    const elem = screen.getByText(/submit/i);
    fireEvent.click(elem);

    expect(callBack).toHaveBeenCalledTimes(1);
});
  
test('button should be disabled', () => {
    const callBack = jest.fn();
    render(<Button disabled={true} onClick={callBack} />);

    const elem = screen.getByText(/submit/i);
    fireEvent.click(elem);
    
    expect(elem.disabled).toEqual(true);
    expect(callBack).toHaveBeenCalledTimes(0);
});
  
test('button state changed to busy', () => {
    render(<Button busy={true} />);

    const elem = screen.getByText(/Processing.../i);

    expect(elem).toBeInTheDocument();
    expect(elem.disabled).toEqual(true);
});