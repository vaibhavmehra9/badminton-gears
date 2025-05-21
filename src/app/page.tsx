import { Columns } from "@/data-table/columns";
import { DataTable } from "@/data-table";
import { Players } from "@/data/players";

export default function Home() {
  return (
    <main className="p-8 border border-red-500">
      <h1 className="font-semibold  text-2xl mb-5">Badminton Gears</h1>
      <DataTable columns={Columns} data={Players} />
    </main>
  );
}
