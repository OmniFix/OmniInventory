import React from "react";

interface Custom_InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export const Custom_Input: React.FC<Custom_InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-4 w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 ${className}`}
    />
  );
};
