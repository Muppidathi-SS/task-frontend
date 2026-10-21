import { Icons } from "@/icons/icons";
import { ToDo } from "@/mock/task";

export default function TodoSection() {
  return (
    <>
      {ToDo.map((task) => (
        <div
          key={task.id}
          className="flex flex-col w-full justify-between bg-white rounded-md px-3 pt-3 shadow mt-3"
        >
          {task.isFocused && (
            <div className="flex justify-between items-center">
              <span className="border border-red-500 text-red-500 bg-red-100 px-2 rounded-xl text-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-red-500"></span>{" "}
                Focus
              </span>
            </div>
          )}
          <p className="mt-2">{task.taskName}</p>
          <div className="flex items-center gap-2 border-t border-t-gray-100 mt-4 py-4">
            <span className="text-gray-700 text-sm">
              <Icons.WeekIcon sx={{ fontSize: 18 }} /> {task.createdAt}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
