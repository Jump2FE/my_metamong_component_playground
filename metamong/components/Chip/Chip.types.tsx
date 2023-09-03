export type ChipProps = {
  label: string;
  onClick?: () => void;
  onDelete?: () => void;
  icon?: string;
  color?: 'primary' | 'secondary';
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
};
