import React from 'react';
import Text from './Text'; // Adjust the import path as necessary
import theme from '@/styles/theme'; // Adjust the import path as necessary
import { render, screen } from '@/tests/testsUtils';

describe('Text', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Text>Sample Text</Text>);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle('font-family: Work sans');
    expect(container.firstChild).toHaveStyle(
      `font-size: ${theme.texts.default.fontSize}`,
    );
    expect(container.firstChild).toHaveStyle(
      `line-height: ${theme.texts.default.lineHeight}`,
    );
    expect(container.firstChild).toHaveStyle(`color: ${theme.colors.primary}`);
  });

  it('applies custom size, font, color, and weight', () => {
    const { container } = render(
      <Text as="h1" size="xl" font="Rubik" color="midnightGray" weight="bold">
        Custom Text
      </Text>,
    );
    expect(container.firstChild).toHaveStyle(
      `font-size: ${theme.texts.xl.fontSize}`,
    );
    expect(container.firstChild).toHaveStyle(
      `line-height: ${theme.texts.xl.lineHeight}`,
    );
    expect(container.firstChild).toHaveStyle('font-family: Rubik');
    expect(container.firstChild).toHaveStyle(
      `color: ${theme.colors['midnight-gray']}`,
    );
    expect(container.firstChild).toHaveStyle(
      `font-weight: ${theme.fontWeights.bold}`,
    );
  });

  it('renders the correct HTML tag', () => {
    render(<Text as="h2">Heading 2</Text>);
    const headingElement = screen.getByText('Heading 2');
    expect(headingElement.tagName).toBe('H2');
  });
});
