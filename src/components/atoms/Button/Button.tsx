import theme from '@/styles/theme';
import styled from '@xstyled/emotion';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button = styled.button`
  border-radius: 5px;
  padding: 16px 24px 16px 24px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${theme.sizes.xl};
  box-sizing: border-box;

  transition:
    background-color 0.2s,
    color 0.2s;

  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors['primary-hover']};
  }

  &:active {
    background-color: ${theme.colors['primary-pressed']};
  }

  &:focus {
    background-color: ${theme.colors['primary-pressed']};
    outline: none;
  }

  ${({ fullWidth }: ButtonProps) => fullWidth && `width:100%;`}

  ${({ variant }: ButtonProps) =>
    variant === 'secondary' &&
    `
    border: 1px solid ${theme.colors['purple-gray']};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors['purple-gray']};

    &:hover {
      background-color: ${theme.colors['secondary--hover']};
    }

    &:active, &:focus {
      background-color: ${theme.colors['secondary--pressed']};
    }

  `}
`;

export default Button;
