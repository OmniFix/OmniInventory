import React from 'react';

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

export const Table_Cell: React.FC<TableCellProps> = ({ children, className }) => {
  return (
    <td className={`px-5 py-3 border-b border-gray-200 ${className}`}>
      {children}
    </td>
  );
};
