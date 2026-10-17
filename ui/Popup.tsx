import { Icons } from "@/icons/icons";
import { ReactNode } from "react";

interface PopupProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export default function Popup({ title, onClose, children }: PopupProps) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              aria-label="Close modal"
            >
              <Icons.CloseIcon sx={{ fontSize: 30 }} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
