import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  const { container, getByText } = render(<App />);
  const headerEl = getByText(/App name/i);
  expect(headerEl).toBeInTheDocument();
});