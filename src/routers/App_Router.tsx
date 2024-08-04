import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Menu_Layout } from "../modules/website/pages/menubar";
import { NewDashboard } from "../pages/newDashboard";
import { CustomerLogs } from "../pages/customerLogs"; // Corrected import
import {Spinner} from "../shared/components/spinner";

export const App_Router = () => {
  return (
    <Router>
      <Menu_Layout>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Spinner fullPage />}>
                <NewDashboard />
              </Suspense>
            }
          />
          <Route
            path="/customers-logs"
            element={
              <Suspense fallback={<Spinner fullPage />}>
                <CustomerLogs />
              </Suspense>
            }
          />
        </Routes>
      </Menu_Layout>
    </Router>
  );
};
