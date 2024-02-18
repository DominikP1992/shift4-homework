import React from 'react';
import Input from './Input'; 
import { render, screen } from '@/tests/testsUtils';

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
