import { Button, Container, TextField } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import { StyledTable, Wrapper } from './ParseTable/ParseTable.styled';
import { flexRender } from '@tanstack/react-table';
import useParseTable from './ParseTable/useParseTable';

const ParseUtility = () => {
  const [data, setData] = useState('');
  const [dataForTable, setDataForTable] = useState([]);
  const { table } = useParseTable(dataForTable);

  function handleChange(event) {
    setData(event.target.value);
  }

  function handleClick(event) {
    const normalizeData = data
      .trim()
      .toUpperCase()
      .split('_')
      .filter(item => item !== '')
      .map(item => item.split('\n').filter(item => item !== ''));

    const dataObj = normalizeData.map(item => {
      let result = {};

      item.forEach((value, index) => {
        if (index === 0) {
          result.number = value;
          return;
        }

        if (index !== item.length - 1) {
          const qwe = value.split(' ');

          result[qwe[0]] = qwe[1];

          return;
        }

        result.result = value;
      });

      return result;
    });
    setDataForTable(dataObj);
  }
  return (
    <Container style={{ marginTop: '50px' }}>
      <TextFieldStyled
        multiline
        maxRows={10}
        placeholder="Enter message"
        value={data}
        onChange={handleChange}
      />
      <Button type="submit" onClick={handleClick}>
        Submit
      </Button>
      <div>Table will be here =)</div>
      <Wrapper>
        <StyledTable>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Wrapper>
    </Container>
  );
};

export default ParseUtility;

export const TextFieldStyled = styled(TextField)`
  display: block;
  margin: auto;
  width: 100%;
`;
