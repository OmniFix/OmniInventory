import { useState } from "react";
import { Custom_Input } from "../inputsfields/Custom_Input";
import { Custom_Button } from "../buttons/Custom_Button";

export default function Customer_Add() {
  const [formData, setFormData] = useState({
    name: "",
    item: "",
    problem: "",
    phoneno: "",
    extradetail: "",
  });

  return (
    <div className="bg-gray-200 p-8 rounded-md">
      <form className="flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex">
            <p>Job No:</p>
            <p className="ml-1 border-b border-gray-800 text-red-500">0000</p>
          </div>

          <div className="flex">
            <p>Date:</p>
            <p className="ml-1 border-b border-gray-800 text-red-500">
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-full mr-2">
            <p className="text-sm ml-1 font-PoppinsRegular">
              Name<span className="text-red-600">*</span>
            </p>
            <Custom_Input
              placeholder="e.g. Hadeed Naeem"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="w-full ml-2">
            <p className="text-sm ml-1 font-PoppinsRegular">
              Item<span className="text-red-600">*</span>
            </p>
            <Custom_Input
              placeholder="e.g. Laptop i5 8th Gen"
              value={formData.item}
              onChange={(e) =>
                setFormData({ ...formData, item: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-full mr-2">
            <p className="text-sm ml-1 font-PoppinsRegular">
              Problem<span className="text-red-600">*</span>
            </p>
            <Custom_Input
              placeholder="e.g Display Issue"
              value={formData.problem}
              onChange={(e) =>
                setFormData({ ...formData, problem: e.target.value })
              }
            />
          </div>

          <div className="w-full ml-2">
            <p className="text-sm ml-1 font-PoppinsRegular">
              Phone No <span className="text-red-600">*</span>
            </p>
            <Custom_Input
              type="number"
              placeholder="e.g 03123456789"
              value={formData.phoneno}
              onChange={(e) =>
                setFormData({ ...formData, phoneno: e.target.value })
              }
            />
          </div>
        </div>

        <Custom_Button
          text="Add Customer"
          onClick={() => {
            console.log(formData);
          }}
          className="mt-2"
        />
      </form>
    </div>
  );
}
