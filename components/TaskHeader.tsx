import { Icons } from "@/icons/icons";

interface TaskHeaderProps {
  headerName: string;
  count: number;
  addTask?: boolean;
}

export default function TaskHeader({
  headerName,
  count,
  addTask,
}: TaskHeaderProps) {
  const getColor = (label: string) => {
    if (label === "To Do") return "bg-red-600 text-white";
    else if (label === "In Progress") return "bg-amber-400 text-white";
    else return "bg-green-600 text-white";
  };
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="flex items-center gap-2 font-medium">
            {headerName}
            <span
              className={`flex h-5 w-5 text-sm items-center justify-center rounded-full ${getColor(headerName)}`}
            >
              {count}
            </span>
          </h1>
        </div>

        {addTask && (
          <button>
            <Icons.AddTaskIcon />
          </button>
        )}
      </div>
    </>
  );
}
