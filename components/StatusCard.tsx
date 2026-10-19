import { STATUS } from "@/constants/home";

export default function StatusCard() {
  return (
    <>
      <div className="w-full">
        <div className="flex gap-4">
          {STATUS.map((status, index) => {
            const Icon = status.iconName;
            return (
              <div
                key={index}
                className="flex flex-1 justify-start items-center gap-4 bg-white rounded-2xl p-4"
              >
                <div className="border border-gray-400 rounded-full flex justify-center items-center p-2">
                  <Icon sx={{ fontSize: 24 }} />
                </div>

                <div>
                  <h1 className="font-medium text-[18px]">
                    {status.labelName}
                  </h1>
                  <p className="text-gray-600 text-[21px]">{status.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
