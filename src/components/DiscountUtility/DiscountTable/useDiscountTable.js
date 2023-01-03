import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ReactComponent as BookIconOrange } from '../assets/Flat.svg';
import { ReactComponent as BookIconGrey } from '../assets/Group.svg';
import EllipsisText from 'react-ellipsis-text';
import { StyledBookTitle, StyledIconBox } from './Table.styled';
import { useMemo } from 'react';

const useDiscountTable = (status, data) => {
  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor('title', {
        header: 'Базові показники',
        cell: info => (
          <StyledBookTitle>
            <StyledIconBox>
              {status ? <BookIconOrange /> : <BookIconGrey />}
            </StyledIconBox>
            <EllipsisText text={info.getValue()} length={50} />
          </StyledBookTitle>
        ),
      }),
      columnHelper.accessor('author', {
        header: 'Basic quality indicators',
      }),
      columnHelper.accessor('publication', {
        header: 'Min',
      }),
      columnHelper.accessor('publication', {
        header: 'Max',
      }),
      columnHelper.accessor('publication', {
        header: 'Discount',
      }),
      columnHelper.accessor('publication', {
        header: ' Actual quality indicators',
      }),
      columnHelper.accessor('publication', {
        header: ' Actual quality indicators',
      }),
    ],
    [columnHelper, status]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return { table };
};

export default useDiscountTable;

export const cultureBase = {
  wheat: {
    moiture: {
      base: '13%',
      max: '14%',
      discount: '1:1',
    },
    nature: {
      base: '720',
      max: '',
      discount: '1:1',
    },
    gluten: {
      base: '18.5%',
      max: '',
      discount: '1:1',
    },
    grainAdmixture: {
      base: '',
      max: '14%',
      discount: '1:1',
    },
    sproutedGrains: {
      base: '',
      max: '14%',
      discount: '1:1',
    },
    sorghumGrain: {
      base: '',
      max: '14%',
      discount: '1:1',
    },
  },
  soy: 2,
  sunflower: 3,
};
