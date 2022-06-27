import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Table = ({ table, toPercent }) => (
  <div
    className={css`
      display: table;
      margin-top: 10px;
  `}
  >
    {table.map((row, i) => (
      <div
        className={css`
        display: table-row;
        `}
        key={i}
      >
        {row.map((x, j) => (
          <div
            className={css`
              display: table-cell;
              padding: 10px;
              background: rgba(74, 174, 53, ${x});
            `}
            key={`${i}${j}`}
          >
            {toPercent(x)}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Table;
