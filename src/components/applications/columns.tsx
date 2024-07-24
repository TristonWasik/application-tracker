import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import { status, Application } from "@/lib/types";

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue<status>("status");
      let classes = "";

      switch (status) {
        case "Accepted":
          classes =
            "outline text-green-700 outline-green-700 font-semibold rounded-md p-1 bg-green-200/10";
          break;
        case "Interviewed":
          classes =
            "outline text-purple-700 outline-purple-700 font-semibold rounded-md p-1 bg-purple-200/10";
          break;
        case "Rejected":
          classes =
            "outline text-red-700 outline-red-700 font-semibold rounded-md p-1 bg-red-200/10";
          break;
        case "Assessment":
          classes =
            "outline text-teal-700 outline-teal-700 font-semibold rounded-md p-1 bg-teal-200/10";
          break;
        case "Pending Interview":
          classes =
            "outline text-[#5aaca0] outline-[#5aaca0] font-semibold rounded-md p-1 bg-[#5aaca0]/10";
          break;
        default:
          classes =
            "outline text-blue-700 outline-blue-700 font-semibold rounded-md p-1 bg-blue-200/10";
      }
      return <span className={classes}>{status}</span>;
    },
    filterFn: (row, columnId, filterValue) => {
      // if our filter is not an object (which includes arrays) then just return all data
      if (typeof filterValue !== "object") return true;

      // return true if the current row's status value includes one of the statuses in our filterValue array
      return (filterValue as string[]).includes(row.getValue<string>(columnId));
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Company
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Role
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "foundAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Posted On
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "appliedAt",
    header: "Applied",
  },
];
