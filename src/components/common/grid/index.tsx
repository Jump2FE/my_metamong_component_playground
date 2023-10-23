import type { CSSProperties, ReactNode } from "react";

type GridItem = {
  key: string;
  minWidth: number;
  render: ReactNode;
};

interface GridProps<Item extends GridItem> {
  data: Item[];
  columns: number;
  gap?: `${number}px`;
  align?: "left" | "center" | "right";
  justify?: "left" | "center" | "right";
}

export const Grid = ({
  data,
  columns,
  gap,
  align,
  justify,
}: GridProps<GridItem>) => {
  const style = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap,
    alignItems: align,
    justifyItems: justify,
  } satisfies CSSProperties;

  return (
    <div style={style}>
      {data.map(({ key, minWidth, render }) => (
        <div key={key} style={{ minWidth }}>
          {render}
        </div>
      ))}
    </div>
  );
};
