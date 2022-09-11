import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe( 'TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorld = screen.getByText(/hello world/i);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value.../i);
    expect(helloWorld).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    // screen.debug();
  });

  test('async', async () => {
    render(<App />);
    // screen.debug();
    const helloWorld = await screen.findByText(/data/i);
    expect(helloWorld).toBeInTheDocument();
    // screen.debug();
  });

  test('CLICK_EVENT', async () => {
    render(<App />);
    // screen.debug();
    const btn = screen.getByTestId('toggle-btn');
    const toggleDiv = screen.queryByTestId('toggle-elem');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('INPUT EVENT', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value.../i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    /*fireEvent.input(input, {
      target: { value: '1234'}
    });*/
    userEvent.type( input, '1234' );
    expect(screen.queryByTestId('value-elem')).toContainHTML('1234');
    // screen.debug();
  });

});
