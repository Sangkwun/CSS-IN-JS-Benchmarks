import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ContainerV2 } from './Container';

const tableCSS = css`
  display: table;
  margin-top: 10px;
`;

const rowCSS = css`
  display: table-row;
`;

const Cell = styled.div`
  display: table-cell;
  padding: 10px;
  background: rgba(74, 174, 53, ${props => props.value});
`;

const Table = ({ table, toPercent }) => (
  <ContainerV2 className={tableCSS}>
    {table.map((row, i) => (
      <ContainerV2 className={tableCSS} key={i}>
        {row.map((x, j) => (
          <Cell key={`${i}${j}`} value={x}>
            {toPercent(x)}
          </Cell>
        ))}
      </ContainerV2>
    ))}
  </ContainerV2>
);

export default Table;
