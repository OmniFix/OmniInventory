import React from "react";

interface CustomerLog_HeaderProps {
  headers: string[];
}

export const CustomerLog_Header: React.FC<CustomerLog_HeaderProps> = ({
  headers,
}) => {
  return (
    <thead className="bg-gray-800 text-white font-PoppinsRegular">
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="px-5 py-3 text-left border-b border-gray-200">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};
