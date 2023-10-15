import { cn } from '@/utils/cn';

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CardContent({ className, style, children }: CardContentProps) {
  return (
    <div className={cn('flex p-2 break-all', className)} style={style}>
      {children}
    </div>
  );
}
