import Table from "@/ui/Table";

export default function Dashboard() {
  return (
    <>
      <div className="flex gap-1 flex-col">
        <h1 className="text-3xl font-semibold">Welcome, Tester</h1>
        <p className="text-[#64748b] text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          provident?
        </p>
      </div>
      <div className="mt-4">
        <Table />
      </div>
    </>
  );
}
