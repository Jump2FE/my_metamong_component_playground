'use client';

import { Grid } from '@/components/Grid/Grid';
import { getGridColumnWidth } from '@/components/Grid/utils/columnWidth';
import { plainTextRendererCreator } from '@/components/Grid/utils/renderers';
import { ColumnWidthProviderType, useColumns } from '@/components/Grid/utils/useColumns';
import { Box } from '../common/Box';

interface Data {
  a: string;
  b: string;
  c: string;
  d: string;
}

const mock: Data[] = [
  { a: 'hello', b: 'bye', c: 'dinner', d: 'chicken' },
  { a: 'chicken', b: 'bye', c: 'dinner', d: 'help' },
  { a: 'pill', b: 'jump2fe', c: 'just', d: 'tree' },
  { a: 'smoke', b: 'crap', c: 'dinner', d: 'fish' },
];

export function GridExample() {
  const columns = useColumns<Data, ColumnWidthProviderType<typeof getGridColumnWidth>>(
    getGridColumnWidth,
    [
      {
        header: 'A',
        cellRenderer: plainTextRendererCreator('a'),
        width: { minWidth: 300, rest: 2 },
      },
      {
        header: 'B',
        cellRenderer: plainTextRendererCreator('b'),
        width: { minWidth: 300, rest: 2 },
      },
      {
        header: 'C',
        cellRenderer: plainTextRendererCreator('c'),
        width: { minWidth: 300, rest: 3 },
      },
      {
        header: 'D',
        cellRenderer: plainTextRendererCreator('d'),
        width: { minWidth: 220, rest: 1 },
      },
    ],
    [],
  );

  return (
    <Box title="Grid" description="그리드 컴포넌트. 버전 1">
      <Grid
        columns={columns}
        data={mock}
        placeholder={<h4>loading...</h4>}
        noData={<div>no data</div>}
      />
    </Box>
  );
}
