import { Icons } from "@/icons/icons";
import { InProgress } from "@/mock/task";

export default function InprogressSection() {
  return (
    <>
      {InProgress.map((task) => (
        <div
          key={task.id}
          className="flex flex-col w-full justify-between bg-amber-50 rounded-md px-3 pt-3 shadow mt-3 pb-5"
        >
          <div className="flex justify-between items-center">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
            </span>
          </div>
          <p className="mt-2">{task.taskName}</p>
          {task.isFocused && (
            <>
              <div className="w-full">
                <div className="mb-1 flex items-end justify-end text-sm">
                  <span className="font-medium text-gray-800">65%</span>
                </div>

                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-300">
                  <div
                    className="h-full rounded-full bg-black transition-all duration-300"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>
              <div className="flex w-fit items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-mono font-medium tracking-wide text-gray-700 mb-2 mt-4">
                <Icons.TimerIcon sx={{ fontSize: 18 }} />
                <span>01:42:10/{task.totalHour}</span>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}
