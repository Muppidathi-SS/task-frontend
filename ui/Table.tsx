import { Icons } from "@/icons/icons";
import { TaskResponse, TaskResponseList } from "@/types/tasks";
import { format, isValid } from "date-fns";

const columnNames = [
  "Task Name",
  "Status",
  "Priority",
  "Category Name",
  "Focus Due Date",
  "Actions",
];

interface TableProps {
  rows: TaskResponseList;
  onClick: (mode: "edit" | "delete", id: string) => void;
}

export default function Table({ rows, onClick }: TableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
      <div className="max-h-101.5 overflow-y-auto">
        <table className="w-full min-w-225 text-center text-sm">
          <thead className="sticky top-0 z-10 bg-gray-300 text-gray-700">
            <tr>
              {columnNames.map((col) => (
                <th
                  key={col}
                  className="whitespace-nowrap px-6 py-4 font-medium"
                >
                  {col.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {rows.map((task: TaskResponse) => (
              <tr
                key={task.task_id}
                className="transition-colors bg-white hover:bg-gray-50"
              >
                <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                  {task.task_name}
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  {task.status}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                  {task.priority}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                  {task.category_name}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                  {task.focus_due_date &&
                  isValid(new Date(task.focus_due_date))
                    ? format(new Date(task.focus_due_date), "dd MMM yyyy")
                    : "-"}
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onClick("edit", task.task_id)}
                      className="cursor-pointer rounded-[10px] border border-gray-400 p-1.5 text-gray-400 shadow-md"
                    >
                      <Icons.EditIcon />
                    </button>

                    <button
                      onClick={() => onClick("delete", task.task_id)}
                      className="cursor-pointer rounded-[10px] border border-red-400 p-1.5 text-red-400 shadow-md"
                    >
                      <Icons.DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}