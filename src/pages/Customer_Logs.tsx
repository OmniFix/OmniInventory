import * as React from "react";
import {Customer_Add} from "../components/customerlogs/Customer_Add";
import Custom_Table from "../components/tables/Custom_Table";

export default function Customer_Logs() {
  return (
    <React.Fragment>
      <div className="">
        <h1 className="text-xl md:text-3xl font-PoppinsBold flex justify-center">
          <span className="text-red-500">Customer</span> Logs
        </h1>
      </div>

      <div className="my-3 md:my-5">
        <Customer_Add />
      </div>

      <div className="my-3 md:my-5">
        <Custom_Table />
      </div>
    </React.Fragment>
  );
}
