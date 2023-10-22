export interface IGridProps {
  columns: IGridColumn[];
  rows: IGridRow[];
}

export interface IGridColumn {
  title: string;
  dataIndex: string;
  key: string;
}

export interface IGridRow {
  [key: IGridColumn['dataIndex']]: any;
}
