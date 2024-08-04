import React from 'react';
import { Table_Header } from './header';
import { Table_Cell } from './cell';

interface CustomTableProps {
  headers: string[];
  rows: Array<{ [key: string]: number | string }>;
}

export const CustomTable: React.FC<CustomTableProps> = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow hover:shadow-md">
      <table className="min-w-full bg-white border border-gray-200 table-fixed border-collapse">
        <Table_Header headers={headers} />
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              } border-b border-gray-200`}
            >
              {headers.map((header, cellIndex) => (
                <Table_Cell key={cellIndex}>{row[header]}</Table_Cell>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
