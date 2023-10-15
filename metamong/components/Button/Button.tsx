import { forwardRef, MouseEventHandler, PropsWithChildren } from 'react';
import { PiSpinnerBold } from 'react-icons/pi';
import { cn } from '../../utils/cn';

export const btnTypes = ['dense', 'default', 'ghost'] as const;
export type ButtonType = (typeof btnTypes)[number];

export const btnShortSizes = ['lg', 'md', 'sm'] as const;
export type ButtonShortSize = (typeof btnShortSizes)[number];

export interface ButtonProps extends PropsWithChildren {
  icon?: React.ReactNode;
  type?: ButtonType;
  size?: ButtonShortSize;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const commonClass =
  'rounded-lg flex justify-center gap-4 items-center cursor-pointer ease-in-out duration-130 transition-colors whitespace-nowrap';

const buttonTypeClassMap: Record<ButtonType | 'disabled', string> = {
  dense: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white',
  default:
    'bg-white hover:bg-[#F6F6F6] active:bg-[#E8E8E8] text-slate-700 border border-line',
  ghost:
    'bg-[#00000008] hover:bg-[#00000032] active:bg-[#00000042] text-slate-70',
  disabled: 'bg-gray-200 text-white cursor-not-allowed',
};

const buttonSizeClassMap: Record<ButtonShortSize, string> = {
  lg: 'h-[48px] text-[16px] px-[16px]',
  md: 'h-[34px] text-[14px] px-[14px]',
  sm: 'h-[20px] text-[12px] px-[12px]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      icon,
      type = 'default',
      size = 'md',
      loading = false,
      disabled = false,
      onClick,
      children,
      className,
      style,
    },
    ref?: React.Ref<HTMLButtonElement>,
  ) {
    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled || loading}
        style={style}
        className={cn(
          commonClass,
          buttonTypeClassMap[disabled ? 'disabled' : type],
          buttonSizeClassMap[size],
          className,
        )}
      >
        {loading ? <PiSpinnerBold /> : icon}
        {children}
      </button>
    );
  },
);
