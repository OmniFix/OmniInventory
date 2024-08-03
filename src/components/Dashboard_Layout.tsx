import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function Dashboard_Layout({ children }: DashboardLayoutProps) {

  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden">
      <Navbar />
      {/* <div className="flex w-full h-full"> */}
      <div className="flex flex-1">
        <aside className="hidden md:flex flex-col md:w-64 md:bg-gray-800 md:text-white">
          <div className="p-4 text-2xl font-bold">OmniInventory</div>
          <nav>
            <ul>
              <li>
                <Link to="/dashboard" className="block p-4 hover:bg-gray-700">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/customers-logs" className="block p-4 hover:bg-gray-700">
                  Customers Logs
                </Link>
              </li>

              {/* Add more navigation links as needed */}
            </ul>
          </nav>
        </aside>
        {/* <main className="flex-1 overflow-auto">{children}</main> */}
          <main className="w-full h-full px-8 md:px-10 py-2 md:py-5">{children}</main>
      </div>
    </div>
  );
}
