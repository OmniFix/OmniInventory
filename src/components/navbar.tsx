import React from "react";
import { FaRegBell, FaBars } from "react-icons/fa6";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4 px-2 md:px-4 border-b border-gray-300">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <FaBars className="h-4 w-4 text-gray-800 hover:text-red-500 cursor-pointer md:hidden" />
        </div>

        <div className="flex-1 flex justify-center ">
          <p className="font-PoppinsRegular text-base md:text-2xl text-gray-800">
            {" "}
            <span className="text-red-500"> Haider </span> Computer Services
          </p>
        </div>

        <div className="flex space-x-4 mr-2">
          <FaRegBell className="h-4 md:h-6 w-4 md:w-6 text-red-500 hover:text-gray-800 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};
