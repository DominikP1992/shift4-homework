import React from 'react';
import { render, screen } from '@/tests/testsUtils';
import IconButton from './IconButton'; // Adjust the import path as necessary

describe('IconButton', () => {
  it('renders without crashing', () => {
    render(<IconButton aria-label="test button" />);
    expect(screen.getByLabelText('test button')).toBeInTheDocument();
  });

  it('match snapshot', () => {
    render(<IconButton aria-label="test button" />);
    expect(screen.getByLabelText('test button')).toMatchSnapshot();
  });

  it('applies medium size styles correctly', () => {
    const { getByRole } = render(<IconButton size="medium" />);
    expect(getByRole('button')).toHaveStyle('width: 40px');
    expect(getByRole('button')).toHaveStyle('height: 40px');
  });
});
