import React from 'react';
import './output.css';

const Table = ({ table, toPercent }) => (
  <div className="table mt-10">
    {table.map((row, i) => (
      <div className="table-row" key={i}>
        {row.map((x, j) => (
          <div
            key={`${i}${j}`}
            className={`table-cell p-2.5 bg-[#49ae35]`}
            style={{
              opacity: x,
            }}
          >
            {toPercent(x)}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Table;
