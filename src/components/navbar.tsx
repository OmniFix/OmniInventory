import React, { useState } from "react";
import logo from "../assets/icons/logo_with_text.png";
import { Custom_SearchBar } from "./Custom_SearchBar";
import { FaRegBell } from "react-icons/fa6";

export const Navbar: React.FC = () => {
  const [search, setSearch] = useState("");
  return (
    <nav className="bg-white p-4">
      <div className="flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="OmniInventory"
            className="h-6 w-auto object-contain"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center mx-4 mt-2 md:mt-0">
          <Custom_SearchBar
            placeholder="Search customers"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            className="w-full max-w-xs md:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Icons */}
        <div className="flex space-x-4 text-black mt-2 md:mt-0">
          <FaRegBell className="h-6 w-6 text-red-500 hover:text-blue-600 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};
