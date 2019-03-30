import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from 'react-testing-library'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

jest.useFakeTimers();

it('renders 50:00 on mount', () => {
  const { getByTestId } = render(<App/>)
  expect(getByTestId('timer').textContent).toBe('50:00')
})

it('decreases time by one on tick', () => {
  const { getByTestId } = render(<App/>)
  jest.advanceTimersByTime(1000);
  expect(getByTestId('timer').textContent).toBe('49:59');
})

it('decreases time by last tick done', () => {
  const { getByTestId } = render(<App/>)
  jest.advanceTimersByTime(3000000);
  expect(getByTestId('timer').textContent).toBe('00:00');
})
