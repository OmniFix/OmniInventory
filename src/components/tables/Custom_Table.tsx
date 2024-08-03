import { CustomerLog_Header } from "./header/CustomerLog_Header";
import { CustomerLog_Cell } from "./cell/CustomerLog_Cell";

function createData(
  jobno: number,
  date: number,
  name: string,
  item: number,
  problem: number,
  phoneno: number
) {
  return { jobno, date, name, item, problem, phoneno };
}

const rows = [
  createData(1, 159, "Hadeed", 24, 4.0, 9.0),
  createData(2, 237, "Zafeer", 37, 4.3, 9),
  createData(3, 262, "Musfir", 24, 6.0, 9),
  createData(4, 305, "Naeem", 67, 4.3, 9),
  createData(5, 356, "Khizar", 49, 3.9, 9),
];

export default function Custom_Table() {
  return (
    <div className="overflow-x-auto rounded-lg shadow hover:shadow-md">
      <table className="min-w-full bg-white border border-gray-200 table-fixed border-collapse">
        <CustomerLog_Header
          headers={["Job No", "Date", "Name", "Item", "Problem", "Phone"]}
        />
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.name}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } border-b border-gray-200`}
            >
              <CustomerLog_Cell>{row.jobno}</CustomerLog_Cell>
              <CustomerLog_Cell>{row.date}</CustomerLog_Cell>
              <CustomerLog_Cell>{row.name}</CustomerLog_Cell>
              <CustomerLog_Cell>{row.item}</CustomerLog_Cell>
              <CustomerLog_Cell>{row.problem}</CustomerLog_Cell>
              <CustomerLog_Cell>{row.phoneno}</CustomerLog_Cell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
