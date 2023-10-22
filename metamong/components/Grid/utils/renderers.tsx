import Image from 'next/image';

// just for example
export function plainTextRendererCreator<T extends keyof any>(dataKey: T) {
  return function PlaintextRenderer({ data }: { data: Record<T, string | number> }): JSX.Element {
    return <span>{data[dataKey]}</span>;
  };
}

// just for example
export function imageRendererCreator<T extends keyof any>(dataKey: T) {
  return function ImageRenderer({ data }: { data: Record<T, string> }): JSX.Element {
    return (
      <Image src={data[dataKey]} alt="image" width={100} height={100} priority={true} />
    ); /** TODO refactor witdh, height value */
  };
}
