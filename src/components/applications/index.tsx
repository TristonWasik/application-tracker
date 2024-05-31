import { applications } from "@/lib/applications";
import { columns } from "./columns";
import { DataTable } from "./table";

export default function ApplicationsTable() {
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={applications.sort((a, b) =>
          new Date(a.appliedAt) > new Date(b.appliedAt) ? -1 : 1
        )}
      />
    </div>
  );
}
