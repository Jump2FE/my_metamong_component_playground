export interface BoxProps extends React.PropsWithChildren {
  title: string;
  description: string;
}

export function Box({ title, description, children }: BoxProps) {
  return (
    <div className="flex flex-col w-full gap-5">
      <div className="text-3xl font-bold">{title}</div>
      <div className="">{description}</div>
      {children}
    </div>
  );
}
