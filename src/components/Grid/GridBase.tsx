import {
  GridBody,
  GridCell,
  GridContainer,
  GridHeader,
  GridHeaderCell,
  GridRow,
} from './Grid.styles';

export const GridBase = Object.assign(
  {},
  {
    Root: GridContainer,
    Header: GridHeader,
    Body: GridBody,
    Row: GridRow,
    HeaderCell: GridHeaderCell,
    Cell: GridCell,
  }
);
