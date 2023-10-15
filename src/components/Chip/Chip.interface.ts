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
export type IButtonProps = React.HTMLAttributes<HTMLButtonElement>;
