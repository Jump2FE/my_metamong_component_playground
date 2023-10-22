import {
  GridBody,
  GridCell,
  GridContainer,
  GridHeader,
  GridHeaderCell,
  GridRow,
} from './Grid.styles';
import { IGridProps } from './Grid.types';

function Grid({ columns, rows }: IGridProps) {
  return (
    <GridContainer>
      <GridHeader>
        <GridRow>
          {columns.map((column) => (
            <GridHeaderCell key={column.key}>{column.title}</GridHeaderCell>
          ))}
        </GridRow>
      </GridHeader>
      <GridBody>
        {rows.map((row, index) => (
          <GridRow key={index}>
            {columns.map((column) => (
              <GridCell key={column.key}>{row[column.dataIndex]}</GridCell>
            ))}
          </GridRow>
        ))}
      </GridBody>
    </GridContainer>
  );
}

export default Grid;
