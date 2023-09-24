import { TIconType } from 'components/Icon/Icon';

export type TClassName =
  | 'primary'
  | 'support'
  | 'support-line'
  | 'outline'
  | 'tag'
  | 'arrow-top'
  | 'copy'
  | 'hamburger'
  | 'hamburger-news'
  | 'share'
  | 'download'
  | 'direct'
  | 'more';

export type TType = 'button' | 'submit' | 'reset';
export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className: TClassName;
  iconType?: TIconType;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: TType;
}
