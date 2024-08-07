import React from "react";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export const Custom_SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-4 py-2 border text-red-500 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 ${className}`}
    />
  );
};
