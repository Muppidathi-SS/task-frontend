import Loading from "./Loading";

export default function LoadingPopup() {
  return (
    <>
      <div className="fixed inset-0 z-99 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-8 shadow-2xl">
          <h1 className="text-xl font-semibold text-gray-800">Loading...</h1>
          <Loading />
        </div>
      </div>
    </>
  );
}
