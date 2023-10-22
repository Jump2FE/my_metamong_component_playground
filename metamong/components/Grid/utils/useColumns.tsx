import { useMemo } from 'react';
import { GridColumn } from '../Grid';

export type ColumnWidth = (full: number) => number;
export type ColumnWidthProvider<T> = (data: T[]) => ColumnWidth[];
export type RequirementColumns<DataT, WidthInfoT> = Omit<GridColumn<DataT>, 'width'> & {
  width: WidthInfoT;
};

export type ColumnWidthProviderType<T> = T extends ColumnWidthProvider<infer I> ? I : never;
/** TODO: check infer */

export function useColumns<DataT, WidthInfoT>(
  /**
   * `columnWidthProvider` gets a list of the `widthInfo` and returns a list of width functions.
   */
  columnWidthProvider: ColumnWidthProvider<WidthInfoT>,
  requirements: RequirementColumns<DataT, WidthInfoT>[],
  dependencies: any[] = [],
): GridColumn<DataT>[] {
  const getColumnWidth = columnWidthProvider(
    useMemo(
      () => requirements.map(({ width }) => width),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      dependencies,
    ),
  );
  return useMemo(
    () =>
      requirements.map(({ width, ...rest }, index) => {
        return {
          ...rest,
          width: getColumnWidth[index],
        };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies,
  );
}
