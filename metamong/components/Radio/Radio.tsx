'use client';

import { useCallback, useId, useMemo } from 'react';
import { cn } from '../../utils/cn';
import { useRadioContext } from './RadioGroup';

export interface RadioProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'lg' | 'xl';
  value?: string;
  title?: string;
  disabled?: boolean;
}

const sizeCollection = {
  outer: {
    lg: 'w-4 h-4',
    xl: 'w-5 h-5',
  },
  inner: {
    lg: 'w-2 h-2',
    xl: 'w-3 h-3',
  },
};

export function Radio({ size = 'lg', title, value: originalValue = '', disabled }: RadioProps) {
  const { onChange, value } = useRadioContext();
  const checked = useMemo(() => value === originalValue, [value, originalValue]);
  const id = useId();
  const handleChange = useCallback(
    () => !disabled && onChange(originalValue),
    [onChange, originalValue],
  );
  const handleKeyUp = useCallback(
    (e: React.KeyboardEvent<HTMLLabelElement>) => {
      if (e.key === 'Spacebar' || e.key === ' ') handleChange();
    },
    [handleChange],
  );

  return (
    <div
      role="radio"
      className={cn(
        'flex items-center w-fit h-fit cursor-pointer', // ? 여기는 이상하게 border에만 cursor-pointer가 잡힘
        disabled && 'cursor-not-allowed',
      )}
    >
      <label
        className={cn(
          'inline-block border rounded-full relative',
          'transition ease-in-out duration-300 cursor-pointer',
          sizeCollection.outer[size],
          checked ? 'border-blue-500' : 'border-line',
          disabled && 'border-gray-300 pointer-events-none opacity-50',
        )}
        tabIndex={0}
        onKeyUp={handleKeyUp}
        htmlFor={id}
      >
        <input
          id={id}
          type="radio"
          className="relative hidden"
          checked={checked}
          onChange={handleChange}
        />
        <span
          className={cn(
            'absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full transition-opacity',
            'transition ease-in-out duration-300',
            sizeCollection.inner[size],
            disabled && 'bg-gray-300',
          )}
          style={{
            opacity: checked ? 1 : 0,
          }}
        />
      </label>
      {title ? (
        <label
          htmlFor={id}
          className={cn('ml-1 cursor-pointer', disabled && 'text-gray-300 pointer-events-none')}
        >
          {title}
        </label>
      ) : null}
    </div>
  );
}
