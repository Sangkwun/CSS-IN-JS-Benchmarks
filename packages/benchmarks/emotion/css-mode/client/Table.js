import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const tableClass = css`
  display: table;
  margin-top: 10px;
`;

const rowClass = css`
  display: table-row;
`;

const cellClass = css`
  display: table-cell;
  padding: 10px;
`;

const Table = ({ table, toPercent }) => (
  <div css={tableClass}>
    {table.map((row, i) => (
      <div css={css(rowClass)} key={i}>
        {row.map((x, j) => (
          <div
            css={cellClass}
            key={`${i}${j}`}
            style={{ background: `rgba(74, 174, 53, ${x})` }}
          >
            {toPercent(x)}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Table;
