import theme from '@/styles/theme';
import styled from '@xstyled/emotion';

const Input = styled.input`
  border-radius: 4px;
  padding: 0 16px;
  height: ${theme.sizes.xl};
  font-size: 24px;
  font-weight: 500;
  font-family: Rubik;
  background-color: transparent;
  color: ${theme.colors['purple-gray']};
  border: 1px solid ${theme.colors['input-border']};
  outline: none;
  box-shadow: none;
  ${({ fullWidth }: { fullWidth?: boolean }) => fullWidth && `width:100%;`}

  &:hover {
    box-shadow: 0 0 0 1px ${theme.colors['icon-button--pressed']};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${theme.colors['input-border--active']};
  }

  &::placeholder {
    color: ${theme.colors.gray};
  }
`;

export default Input;
