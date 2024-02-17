import React from 'react';
import { render, screen } from '@/tests/testsUtils';
import '@testing-library/jest-dom';
import theme from '@/styles/theme';
import Button from '.';

describe('Button component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole('button', { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it('match snapshot', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toMatchSnapshot();
  });

  it('applies the primary variant styles', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const button = screen.getByRole('button', { name: /primary button/i });

    expect(button).toHaveStyle(
      `background-color: ${theme.colors['primary-pressed']}`,
    );
  });

  it('applies the secondary variant styles', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByRole('button', { name: /secondary button/i });
    button.style.pointerEvents = 'none';
    expect(button).toHaveStyle(
      `background-color: ${theme.colors['secondary--pressed']}`,
    );
  });

  it('spans full width when fullWidth is true', () => {
    render(<Button fullWidth>Full Width Button</Button>);
    const button = screen.getByRole('button', { name: /full width button/i });
    expect(button).toHaveStyle('width: 100%');
  });
});
