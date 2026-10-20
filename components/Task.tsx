import { Icons } from "@/icons/icons";

export default function Tasks() {
  return (
    <>
      <div className="w-full flex gap-4">
        <div className="flex-1">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="flex items-center gap-2">
                To Do
                <span className="flex h-5 w-5 text-sm items-center justify-center rounded-full bg-red-600 text-white">
                  4
                </span>
              </h1>
            </div>

            <button>
              <Icons.AddTaskIcon />
            </button>
          </div>
          <div className="flex flex-col w-full justify-between bg-white rounded-md px-3 pt-3 shadow mt-3">
            <div className="flex justify-between items-center">
              <span className="border border-red-500 text-red-500 bg-red-100 px-2 rounded-xl text-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-red-500"></span>{" "}
                Focus
              </span>
            </div>
            <p className="mt-2">
              Working on tesing the sign module on that atlas page.
            </p>
            <div className="flex items-center gap-2 border-t border-t-gray-300 mt-4 py-4">
              <span className="text-gray-700 text-sm">
                <Icons.WeekIcon sx={{ fontSize: 18 }} /> Created at Today,
                5:30PM
              </span>
              {/* <span className="inline-block border border-green-500 text-green-500 bg-green-100 px-2 rounded-xl text-sm">
                  Easy
                </span> */}
            </div>
          </div>
          <div className="flex flex-col w-full justify-between bg-white rounded-md px-3 pt-3 shadow mt-3">
            <div className="flex justify-between items-center">
              <span className="border border-red-500 text-red-500 bg-red-100 px-2 rounded-xl text-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-red-500"></span>{" "}
                Focus
              </span>
            </div>
            <p className="mt-2">
              Working on tesing the sign module on that atlas page.
            </p>
            <div className="flex items-center gap-2 border-t border-t-gray-300 mt-4 py-4">
              <span className="text-gray-700 text-sm">
                <Icons.WeekIcon sx={{ fontSize: 18 }} /> Created at Today,
                5:30PM
              </span>
              {/* <span className="inline-block border border-green-500 text-green-500 bg-green-100 px-2 rounded-xl text-sm">
                  Easy
                </span> */}
            </div>
          </div>
          <div className="flex flex-col w-full justify-between bg-white rounded-md px-3 pt-3 shadow mt-3">
            <p className="mt-2">
              Working on tesing the sign module on that atlas page.
            </p>
            <div className="flex items-center gap-2 border-t border-t-gray-300 mt-4 py-4">
              <span className="text-gray-700 text-sm">
                <Icons.WeekIcon sx={{ fontSize: 18 }} /> Created at Today,
                5:30PM
              </span>
              {/* <span className="inline-block border border-green-500 text-green-500 bg-green-100 px-2 rounded-xl text-sm">
                  Easy
                </span> */}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="flex items-center gap-2">In Progress</h1>
              <span className="flex h-5 w-5 text-sm items-center justify-center rounded-full bg-amber-400 text-white">
                2
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full justify-between bg-amber-50 rounded-md px-3 pt-3 shadow mt-3">
            <div className="flex justify-between items-center">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
              </span>
            </div>
            <p className="mt-2">
              Working on tesing the sign module on that atlas page.
            </p>
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
              <span>01:42:10</span>
            </div>
          </div>
          <div className="flex flex-col w-full justify-between bg-amber-50 rounded-md px-3 pt-3 shadow mt-3">
            <div className="flex justify-between items-center">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
              </span>
            </div>
            <p className="mt-2 my-4">
              Working on tesing the sign module on that atlas page.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="flex items-center gap-2">
                Completed
                <span className="flex h-5 w-5 text-sm items-center justify-center rounded-full bg-green-600 text-white">
                  4
                </span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-full justify-between bg-green-100 rounded-md px-3 pt-3 shadow mt-3">
            <p className="mt-2">
              Working on tesing the sign module on that atlas page.
            </p>
            <div className="flex items-center gap-2 border-t border-t-gray-400 mt-4 py-4">
              <span className="text-gray-700 text-sm">
                <Icons.DoneIcon sx={{ fontSize: 18, color: "#00a103" }} />{" "}
                Completed at Today, 5:30PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
