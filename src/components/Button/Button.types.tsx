export interface IButton extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'filled' | 'outlined' | 'elevated';
  disabled?: boolean;
  onClick?: () => void;
  onBlur?: () => void;
}
