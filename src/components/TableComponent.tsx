import React from 'react';

interface TableRow {
  cells: string[];
}

interface TableComponentProps {
  header?: string[];
  rows?: TableRow[];
  caption?: string;
}

const TableComponent: React.FC<TableComponentProps> = ({ header, rows, caption }) => {
  if (!rows || rows.length === 0) {
    return null;
  }

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        {caption && (
          <caption className="text-lg font-semibold text-gray-900 mb-4 text-left">
            {caption}
          </caption>
        )}
        {header && header.length > 0 && (
          <thead className="bg-red-50">
            <tr>
              {header.map((cell, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left text-sm font-semibold text-red-900 border-b border-red-100"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              {row.cells.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 text-sm text-gray-900 border-b border-gray-100"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;