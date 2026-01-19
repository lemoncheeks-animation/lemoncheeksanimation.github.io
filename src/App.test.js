import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the application title', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/lemoncheeks/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
