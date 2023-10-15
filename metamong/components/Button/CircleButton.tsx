import { CSSProperties } from 'react';
import { PiSpinnerBold } from 'react-icons/pi';
import { cn } from '../../utils/cn';

const commonClass =
  'rounded-full flex justify-center items-center cursor-pointer text-text-primary ease-in-out duration-130 transition-colors';

const ghostClass =
  'bg-[#00000006]  hover:bg-[#00000016] active:bg-[#00000026] text-white';
const disabledClass = 'bg-gray-200 text-white cursor-not-allowed';

export interface CircleButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  style?: CSSProperties;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function CircleButton({
  className,
  style,
  children,
  onClick,
  loading = false,
  disabled = false,
}: CircleButtonProps) {
  return (
    <button
      className={cn(
        commonClass,
        'w-6 h-6 w-max-[2.5rem] h-max-[2.5rem]',
        disabled ? disabledClass : ghostClass,
        className,
      )}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="leading-[0px]">
        {loading ? <PiSpinnerBold /> : children}
      </div>
    </button>
  );
}
