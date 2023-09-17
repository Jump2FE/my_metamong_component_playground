'use client';

import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { cn } from '../../utils/cn';

export interface ChipProps extends React.PropsWithChildren {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  closable?: boolean;
  closeIcon?: React.ReactNode;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  onClick?: (e: React.MouseEvent) => void;

  selected?: boolean;
  disabled?: boolean;

  className?: string;
  style?: React.CSSProperties;
}

const commonClass =
  'h-[26px] text-2 rounded-md flex justify-center gap-2 items-center ease-in-out duration-130 transition-colors whitespace-nowrap';

const selectedClassMap: Record<'selected' | 'deselected' | 'disabled', string> = {
  selected: 'bg-blue-600 text-white',
  deselected: 'bg-default border border-line',
  disabled: 'bg-gray-400 text-white cursor-not-allowed',
};

export function Chip({
  startIcon,
  endIcon,
  onClose,
  onClick,
  closable = false,
  selected = false,
  disabled = false,
  className,
  style,
  children,
}: ChipProps) {
  const key = disabled
    ? ('disabled' as const)
    : selected
    ? ('selected' as const)
    : ('deselected' as const);
  return (
    <div
      className={cn(commonClass, selectedClassMap[key], closable ? 'pl-3' : 'px-3', className)}
      onClick={onClick}
      style={style}
    >
      {startIcon && <div className="leading-[0] text-[18px]">{startIcon}</div>}
      {children}
      {endIcon && <div className="leading-[0] text-[18px]">{endIcon}</div>}
      {closable ? (
        <button
          className={cn(
            'h-full pl-3 pr-2 flex items-center bg-[#0000] p-0 ',
            selected ? 'text-white' : 'text-blue-600',
            !disabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none',
          )}
          onClick={(e) => onClose?.(e)}
        >
          <div className="leading-[0] text-[18px]">
            <AiOutlineClose />
          </div>
        </button>
      ) : null}
    </div>
  );
}
