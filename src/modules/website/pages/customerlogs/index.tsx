import * as React from "react";
import { Add_Customer } from "./components/addcustomer";
import { Customer_Table } from "./components/customertable";

export const Customer_Logs = () => {
  return (
    <React.Fragment>
      <div className="">
        <h1 className="text-xl md:text-3xl font-PoppinsBold flex justify-center">
          <span className="text-red-500">Customer</span> Logs
        </h1>
      </div>

      <div className="my-3 md:my-5">
        <Add_Customer />
      </div>

      <div className="my-3 md:my-5">
        <Customer_Table />
      </div>
    </React.Fragment>
  );
};
