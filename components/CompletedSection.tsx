import { Icons } from "@/icons/icons";
import { Completed } from "@/mock/task";

export default function CompletedSection() {
  return (
    <>
      {Completed.map((task) => (
        <div
          key={task.id}
          className="flex flex-col w-full justify-between bg-green-100 rounded-md px-3 pt-3 shadow mt-3"
        >
          <p className="mt-2">{task.taskName}</p>
          <div className="flex items-center gap-2 border-t border-t-green-300 mt-4 py-4">
            <span className="text-gray-700 text-sm">
              <Icons.DoneIcon sx={{ fontSize: 18, color: "#00a103" }} />{" "}
              {task.completedAt}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
