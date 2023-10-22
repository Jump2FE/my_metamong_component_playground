export interface GridWidthInfo {
  readonly minWidth: number;
  readonly maxWidth?: number; // TODO : add maxWidth
  readonly rest: number;
}

export const getGridColumnWidth = (cellInfo: GridWidthInfo[]) => {
  const totalRest = cellInfo.reduce((acc, cur) => acc + cur.rest, 0);
  const totalMinWidth = cellInfo.reduce((acc, cur) => acc + cur.minWidth, 0);

  return cellInfo.map(
    ({ minWidth, rest }) =>
      (full: number) =>
        (minWidth + (full - totalMinWidth) * (rest / totalRest)) / full,
  );
};
