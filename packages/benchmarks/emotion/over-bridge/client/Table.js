import React from 'react';
import styled, { css } from 'react-emotion';
import { buildStyles } from './utils';

export const Component = styled.div`
  ${props => buildStyles(props)}
`;

const Table = ({ table, toPercent }) => (
  <Component display="table" marginTop="10px">
    {table.map((row, i) => (
      <Component display="table-row" key={i}>
        {row.map((x, j) => (
          <Component
            display="table-cell"
            padding="10px"
            backgroundColor={`rgba(74, 174, 53, ${x})`}
            key={`${i}${j}`}
          >
            {toPercent(x)}
          </Component>
        ))}
      </Component>
    ))}
  </Component>
);

export default Table;
