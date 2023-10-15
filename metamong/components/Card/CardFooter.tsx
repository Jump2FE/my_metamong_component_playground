import { cn } from '@/utils/cn';

export interface CardFooterProps {
  actions: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CardFooter({ actions, className, style }: CardFooterProps) {
  return (
    <>
      {actions && (
        <div className={cn('flex gap-2 p-2 overflow-auto', className)} style={style}>
          {actions}
        </div>
      )}
    </>
  );
}
