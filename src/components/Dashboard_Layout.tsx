import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function Dashboard_Layout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar />
      <div className="flex w-full h-full">
        <aside className="w-64 bg-gray-800 text-white">
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
          <main className="w-full h-full overflow-auto ">{children}</main>
      </div>
    </div>
  );
}
