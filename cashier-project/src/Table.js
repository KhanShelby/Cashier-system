import React from 'react';

function Table() {
  const tableRows = [
    ['A01', 'A02', 'A03', 'A04', 'A05'],
    ['B01', 'B02', 'B03', 'B04', 'B05'],
    ['C01', 'C02', 'C03', 'C04', 'C05'],
    ['D01', 'D02', 'D03', 'D04', 'D05']
  ];

  return (
    <div className="table">
      {tableRows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((tableId) => (
            <div className="box" id={tableId.toLowerCase()} key={tableId}>
              {tableId}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Table;
