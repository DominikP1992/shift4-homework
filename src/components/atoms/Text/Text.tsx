import React from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

type TextTag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

type Font = 'Inter' | 'Work sans' | 'Rubik';

type TextSize = keyof Pick<
  typeof theme.texts,
  'xs' | 'sm' | 'default' | 'lg' | 'xl' | '2xl'
>;

type FontWeight = keyof typeof theme.fontWeights;

const textColorsMap = {
  midnightGray: theme.colors['midnight-gray'],
  purpleGray: theme.colors['purple-gray'],
  blueGray: theme.colors['blue-gray'],
  default: theme.colors.primary,
};

type TextColor = keyof typeof textColorsMap;

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextTag;
  size?: TextSize;
  font?: Font;
  color?: TextColor;
  weight?: FontWeight;
}

const DynamicText = styled(
  ({ as = 'p', size, font, color, ...otherProps }: TextProps) =>
    React.createElement(as, otherProps),
)<TextProps>`
  ${({
    size = 'default',
    font = 'Work sans',
    color = 'default',
    weight,
  }: TextProps) => `
    font-size: ${theme.texts[size].fontSize};
    line-height: ${theme.texts[size].lineHeight};
    font-family: ${font};
    color: ${textColorsMap[color]};
    font-weight: ${weight ? theme.fontWeights[weight] : 'inherit'};
  `}
`;

const Text: React.FC<TextProps> = ({ as = 'p', ...rest }) => {
  return <DynamicText as={as} {...rest} />;
};

export default Text;
