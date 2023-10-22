import { filledButton, elevatedButton, outlinedButton } from './Button.styles';
import { IButton } from './Button.types';

function Button({
  children,
  size = 'medium',
  variant = 'filled',
  disabled,
  onClick,
  onBlur,
  ...rest
}: IButton) {
  const VariantButton = {
    filled: filledButton,
    outlined: outlinedButton,
    elevated: elevatedButton,
  };

  const StButton = VariantButton[variant];

  return (
    <StButton size={size} disabled={disabled} onClick={onClick} onBlur={onBlur} {...rest}>
      {children}
    </StButton>
  );
}

export default Button;
