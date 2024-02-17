import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input'; // Adjust the import path as necessary

describe('Input', () => {
  it('renders without crashing', () => {
    render(<Input aria-label="test input" />);
    expect(screen.getByLabelText('test input')).toBeInTheDocument();
  });

  it('match snapshot', () => {
    render(<Input aria-label="test input" />);
    expect(screen.getByLabelText('test input')).toMatchSnapshot();
  });

  it('spans full width when fullWidth is true', () => {
    render(<Input fullWidth aria-label="test input" />);

    expect(screen.getByLabelText('test input')).toHaveStyle('width: 100%');
  });
});
