import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';

export interface CardHeaderProps {
  thumbnail?: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CardHeaderThumbnailVariants = cva(
  ['flex rounded-full justify-center text-center overflow-hidden items-center', 'border'],
  {
    variants: {
      size: {
        small: 'w-5 h-5',
        medium: 'w-10 h-10',
        large: 'w-20 h-20',
      },
      type: {
        normal: 'border-black',
        primary: 'border-blue-500',
      },
    },
  },
);

export function CardHeader(props: CardHeaderProps) {
  const { thumbnail, title, subtitle, className, style } = props;
  return (
    <>
      {!!title && (
        <div className={cn('flex gap-2 items-center p-2', className)} style={style}>
          <div className={cn(CardHeaderThumbnailVariants({ type: 'normal', size: 'medium' }))}>
            {thumbnail}
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-bold">{title}</div>
            <div className="text-sm text-gray-500 font-medium">{subtitle}</div>
          </div>
        </div>
      )}
    </>
  );
}
