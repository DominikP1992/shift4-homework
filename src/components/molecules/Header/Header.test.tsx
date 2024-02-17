import React from 'react';
import Header from './'; // Adjust the import path as necessary
import { render, screen } from '@/tests/testsUtils';

describe('Header', () => {
  it('renders without crashing', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('match snapshot', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
