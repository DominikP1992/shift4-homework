import theme from '@/styles/theme';
import styled from '@xstyled/emotion';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium';
}

const IconButton = styled.button`
  border-radius: 5px;
  width: 24px;
  height: 24px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition:
    background-color 0.2s,
    color 0.2s;

  background-color: transparent;

  &:hover {
    background-color: ${theme.colors['icon-button--hover']};
  }

  &:active {
    background-color: ${theme.colors['icon-button--pressed']};
  }

  &:focus {
    background-color: ${theme.colors['icon-button--pressed']};
    outline: none;
  }

  &:disabled {
    background-color: transparent;
    opacity: 0.5;
  }

  ${({ size }: Pick<IconButtonProps, 'size'>) =>
    size === 'medium' &&
    `
        width: 40px;
        height: 40px;
        border-radius: 10px;
    `}
`;

export default IconButton;
