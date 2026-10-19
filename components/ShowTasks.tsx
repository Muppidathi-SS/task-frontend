import { Icons } from "@/icons/icons";
import { getStatusColors, getUpcomingColors } from "@/styles/styles";
import { Today, Upcoming } from "@/types/home";
import CheckboxInput from "@/ui/CheckboxInput";

interface ShowTasksProps {
  mode: string;
  tasks: Today[] | Upcoming[];
}

export default function ShowTasks({ mode, tasks }: ShowTasksProps) {
  return (
    <>
      <div className="w-full flex flex-col bg-white px-3 py-2 rounded-xl shadow mt-4 gap-3 pb-4">
        <h1 className="font-medium text-[21px]">Today's Tasks</h1>
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center">
            <CheckboxInput />
            <p>{task.taskName}</p>
            {mode === "today" && "taskStatus" in task ? (
              <span
                className={`w-30 flex justify-center items-center ml-auto px-2 py-1.5 rounded-2xl font-medium border ${getStatusColors(
                  task.taskStatus,
                )}`}
              >
                {task.taskStatus}
              </span>
            ) : "taskDate" in task ? (
              <span
                className={`flex  justify-center items-center gap-2 ml-auto px-2 py-1.5 text-gray-500 rounded-2xl font-medium bg-gray-100 border border-gray-500`}
              >
                <Icons.WeekIcon />
                {task.taskDate}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}
