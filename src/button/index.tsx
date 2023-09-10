import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { StyledButton } from './style';
import { Spinner } from '../loading/style';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  isFetching?: boolean;
  height?: string;
  width?: string;
  bgColor?: string;
  borderRadius?: string;
  hoverOption?: {
    bgColor?: string;
    color?: string;
  };
}
const Button: FC<IButton> = ({ isFetching, children, ...rest }) => {
  return (
    <StyledButton type="button" {...rest}>
      {isFetching ? <Spinner /> : children}
    </StyledButton>
  );
};

export default Button;

Button.defaultProps = {
  isFetching: false,
  height: '50px',
  width: '150px',
  bgColor: undefined,
  borderRadius: '2.778vw',
  hoverOption: undefined,
};
