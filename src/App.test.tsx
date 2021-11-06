import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Name of the group', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText('Test absolute path');
    expect(linkElement).toBeInTheDocument();
  });

  test('should alway be true', () => {
    expect(true).toBe(true);
  });

  test('should alway be false', () => {
    expect(false).toBe(false);
  });
});
