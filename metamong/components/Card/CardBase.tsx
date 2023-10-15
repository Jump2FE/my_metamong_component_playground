import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import { CardMedia } from './CardMedia';

const CardBaseVariants = cva('flex flex-col min-w-[200px] max-w-[300px]', {
  variants: {
    type: {
      outlined: 'border border-gray-300',
      elevated: 'shadow-md',
    },
  },
});

export interface CardBaseProps extends PropsWithChildren {
  type?: 'outlined' | 'elevated';
  className?: string;
  style?: React.CSSProperties;
}

export function CardRoot({ type = 'elevated', children, className, style }: CardBaseProps) {
  return (
    <div className={cn(CardBaseVariants({ type }), className)} aria-label="" style={style}>
      {children}
    </div>
  );
}

export const CardBase = Object.assign(
  {},
  {
    Root: CardRoot,
    Header: CardHeader,
    Media: CardMedia,
    Content: CardContent,
    Footer: CardFooter,
  },
);
