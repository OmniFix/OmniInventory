import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard_Layout from "../components/Dashboard_Layout";
import Dashboard from "../pages/Dashboard";
import Customer_Logs from "../pages/Customer_Logs";

export default function App_Router() {
  return (
    <Router>
      <Dashboard_Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers-logs" element={<Customer_Logs />} />
          {/* Add more routes as needed */}
        </Routes>
      </Dashboard_Layout>
    </Router>
  );
}
