import { Columns } from "@/data-table/columns";
import { DataTable } from "@/data-table";
import { Players } from "@/data/players";

export default function Home() {
  return (
    <main className="h-screen p-8">
      <h1 className="font-semibold  text-2xl mb-5">Badminton Gears</h1>
      <DataTable columns={Columns} data={Players} />
    </main>
  );
}
