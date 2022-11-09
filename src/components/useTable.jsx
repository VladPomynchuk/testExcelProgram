import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo } from 'react';

const useTable = data => {
  const columnHelper = createColumnHelper();

  const columns = useMemo(() => {
    const keys = [...new Set(data.flatMap(item => Object.keys(item)))];
    if (keys.length > 0) {
      const key = [...keys.filter(item => item !== 'result')];

      key.push('result');
      return key.map(item =>
        columnHelper.accessor(item, {
          header: item,
        })
      );
    }
    return [];
  }, [columnHelper, data]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return { table };
};

export default useTable;
