import React from "react";

interface Custom_ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export const Custom_Button:React.FC<Custom_ButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-gray-800 text-white rounded-md focus:outline-none ${className}`}
    >
      {text}
    </button>
  );
}
