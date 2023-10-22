'use client';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import debounce from './utils/debonce';

export interface GridColumn<Data> {
  header?: string | React.ReactNode;
  cellRenderer: React.ComponentType<{ data: Data }>;
  width: (full: number) => number;
}
interface GridProps<Data> {
  data: Data[] | null | undefined;
  columns: GridColumn<Data>[];
  placeholder: React.ReactNode;
  noData?: React.ReactNode;
  type?: GridType;
  rowId?(data: Data, rowIndex: number): string;
}

export interface WithFullWidthProps {
  width: number;
}

interface GridInternalProps<T> extends GridProps<T>, WithFullWidthProps {}
interface GridHeaderProps<T> extends Pick<GridProps<T>, 'columns' | 'type'>, WithFullWidthProps {}

export type GridType = 'checker' | 'underline';
export interface GridAreaStyles {
  header?: string;
  body?: string;
}

const classRecord: Record<GridType, GridAreaStyles> = {
  checker: {
    header: 'border-[#eaeaea] border-l-[1px]',
    body: 'bg-[#fafafa]',
  },
  underline: {
    header: 'border-[#eaeaea] border-b-[1px]',
    body: 'border-[#eaeaea] border-b-[1px]',
  },
};

function useGridFullWidth() {
  const [gridFullWidth, setGridFullWidth] = useState<number>(0);
  const divRef = useRef<HTMLDivElement>(null); // TODO null delete

  const setContentRectWidth = useCallback(
    debounce((width: number) => {
      setGridFullWidth(width);
    }, 200),
    [],
  );

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      setContentRectWidth(entry.contentRect.width);
    }
  });

  useEffect(() => {
    resizeObserver.observe(divRef.current!);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return { gridFullWidth, divRef };
}

export function withFullWidth<T extends WithFullWidthProps>(
  WrapComponent: React.ComponentType<T>,
): React.ComponentType<Omit<T, keyof WithFullWidthProps>> {
  return function WithFullWidth(props: Omit<T, keyof WithFullWidthProps>) {
    const { gridFullWidth, divRef } = useGridFullWidth();

    return (
      <div className="relative">
        <div ref={divRef}></div>
        <WrapComponent {...({ ...props, width: gridFullWidth } as T)} />
      </div>
    );
  };
}

export function GridHeader<T>({ columns, type = 'checker', width: fullWidth }: GridHeaderProps<T>) {
  const hasHeader = useMemo(
    () => columns.some((column) => Object.hasOwn(column, 'header')),
    [columns],
  );
  if (!hasHeader) return null;
  return (
    <>
      <div
        aria-label="gridHeader"
        role="header"
        className={clsx('py-3', type === 'underline' && classRecord[type].header)}
      >
        {columns.map(({ header, width }, idx) => (
          <span
            key={idx}
            className={clsx(
              'inline-flex px-3 not-italic font-medium text-gray-600 text-sx tracking-tight',
              type === 'checker' && classRecord[type].header,
            )}
            style={{
              width: width(fullWidth) * 100 + '%',
              fontFamily: 'Pretendard' /** TODO customize tailwind variable */,
            }}
          >
            {header}
          </span>
        ))}
      </div>
    </>
  );
}

function GridInternal<T>({
  data,
  columns,
  placeholder,
  noData,
  width: fullWidth,
  type = 'checker',
  rowId,
}: GridInternalProps<T>) {
  console.log(data);
  if (data === null || data === undefined || fullWidth === undefined) return <>{placeholder}</>;
  return (
    <div aria-label="gridTable" role="table">
      <GridHeader columns={columns} width={fullWidth} type={type} />
      <div aria-label="gridBody" role="body">
        {data.length === 0
          ? noData
          : data.map((row, idx) => (
              <div
                key={rowId?.(row, idx) || idx}
                aria-label="gridRow"
                role="row"
                className={clsx(
                  'flex rounded',
                  type === 'checker' && !(idx % 2) && classRecord[type].body,
                )}
              >
                {columns.map(({ width, cellRenderer: CellRenderer }, idx) => (
                  <div
                    key={idx}
                    aria-label="gridCell"
                    role="cell"
                    className={clsx(
                      'inline-flex items-center px-3 py-2',
                      type === 'underline' && classRecord[type].body,
                    )}
                    style={{
                      width: width(fullWidth) * 100 + '%',
                    }}
                  >
                    <CellRenderer data={row} />
                  </div>
                ))}
              </div>
            ))}
      </div>
    </div>
  );
}

export const Grid = dynamic(() => Promise.resolve(withFullWidth(GridInternal)), {
  loading: () => <div>skeleton</div>,
  ssr: false,
}) as <T>(props: Omit<GridInternalProps<T>, keyof WithFullWidthProps>) => React.ReactElement | null;
