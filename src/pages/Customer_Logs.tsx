import * as React from "react";
import Customer_Add from "../components/customerlogs/Customer_Add";
import Custom_Table from "../components/tables/Custom_Table";

export default function Customer_Logs() {
  return (
    <React.Fragment>
      <div>
        <h1 className="text-3xl my-3 font-PoppinsBold flex justify-center">
          <span className="text-red-500">Customer</span> Logs
        </h1>
      </div>

      <div className="mx-10 my-5">
        <Customer_Add />
      </div>

      <div className="mx-10 my-5">
        <Custom_Table />
      </div>
    </React.Fragment>
  );
}
