import Image from 'next/image';

export interface CardMediaProps {
  mediaType?: 'image' | 'video';
  src?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function CardMedia({ mediaType = 'image', src, className, style }: CardMediaProps) {
  return (
    <>
      {mediaType === 'image' ? (
        <Image
          src={!!src ? src : '/placeholder_view_vector.png'}
          width={200}
          height={200}
          layout={'responsive'}
          objectFit={'cover'}
          alt={'card media'}
          className={className}
          style={style}
        />
      ) : (
        <>video</>
      )}
    </>
  );
}
