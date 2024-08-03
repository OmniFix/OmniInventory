import { useState } from "react";
import { Custom_Input } from "../inputsfields/Custom_Input";
import { Custom_Button } from "../buttons/Custom_Button";
import { FaSquarePlus } from "react-icons/fa6";

export const Customer_Add = () => {
  const [formData, setFormData] = useState({
    name: "",
    item: "",
    problem: "",
    phoneno: "",
    extradetail: "",
  });

  const [showExtraInfo, setShowExtraInfo] = useState(false);

  const toggleExtraInfo = () => {
    setShowExtraInfo(!showExtraInfo);
  };

  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-md shadow hover:shadow-md">
      <form className="flex flex-col gap-4">
        <div className="flex justify-between ">
          <div className="flex">
            <p className="text-base font-PoppinsRegular">Job No:</p>
            <p className="ml-1 text-base underline underline-offset-1 text-red-500">
              0000
            </p>
          </div>

          <div className="flex">
            <p className="text-base font-PoppinsRegular">Date:</p>
            <p className="ml-1 text-base underline underline-offset-1 text-red-500">
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full md:mr-2">
            <p className="text-base ml-1 font-PoppinsRegular">
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

          <div className="w-full md:ml-2">
            <p className="text-base ml-1 font-PoppinsRegular">
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

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full md:mr-2">
            <p className="text-base ml-1 font-PoppinsRegular">
              Problem<span className="text-red-600">*</span>
            </p>
            <Custom_Input
              placeholder="e.g. Display Issue"
              value={formData.problem}
              onChange={(e) =>
                setFormData({ ...formData, problem: e.target.value })
              }
            />
          </div>

          <div className="w-full md:ml-2">
            <p className="text-base ml-1 font-PoppinsRegular">
              Phone No<span className="text-red-600">*</span>
            </p>
            <Custom_Input
              type="number"
              placeholder="e.g. 03123456789"
              value={formData.phoneno}
              onChange={(e) =>
                setFormData({ ...formData, phoneno: e.target.value })
              }
            />
          </div>
        </div>

        {!showExtraInfo && (
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleExtraInfo}
          >
            <FaSquarePlus className="text-lg text-gray-800" />
            <span className="ml-2 text-base font-PoppinsRegular">
              Extra Detail
            </span>
          </div>
        )}
        {showExtraInfo && (
          <div className="">
            <p className="text-base ml-1 font-PoppinsRegular">Extra Detail</p>
            <Custom_Input
              placeholder="e.g. Advance Payement"
              value={formData.extradetail}
              onChange={(e) =>
                setFormData({ ...formData, extradetail: e.target.value })
              }
            />
          </div>
        )}

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
};
