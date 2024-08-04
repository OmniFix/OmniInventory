// Customer_Logs.tsx
import React from "react";
import { CustomTable } from "../../../../../../shared/components/table";

const headers = ["Job No", "Date", "Name", "Item", "Problem", "Phone"];
const rows = [
  {
    "Job No": 1,
    Date: 159,
    Name: "Hadeed",
    Item: 24,
    Problem: 4.0,
    Phone: 9.0,
  },
  { "Job No": 2, Date: 237, Name: "Zafeer", Item: 37, Problem: 4.3, Phone: 9 },
  { "Job No": 3, Date: 262, Name: "Musfir", Item: 24, Problem: 6.0, Phone: 9 },
  { "Job No": 4, Date: 305, Name: "Naeem", Item: 67, Problem: 4.3, Phone: 9 },
  { "Job No": 5, Date: 356, Name: "Khizar", Item: 49, Problem: 3.9, Phone: 9 },
];

export const Customer_Table: React.FC = () => {
  return <CustomTable headers={headers} rows={rows} />;
};
