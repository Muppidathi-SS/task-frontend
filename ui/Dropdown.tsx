"use client";

import { Icons } from "@/icons/icons";
import { useState } from "react";

interface DropDownProps {
  value: string;
  dropdownValues: string[];
  onChange: (option: string) => void;
}

export default function Dropdown({
  value,
  dropdownValues,
  onChange,
}: DropDownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-6 py-3 text-[14px] text-gray-700 shadow-sm hover:bg-gray-50"
      >
        {value}
        <span className="cursor-pointer">
          {open ? <Icons.DownIcon /> : <Icons.UpIcon />}
        </span>
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-full rounded-lg border border-gray-200 bg-white p-1 shadow-lg">
          {dropdownValues.map((option) => (
            <li key={option}>
              <button
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`w-full rounded-md px-3 py-2.5 text-left text-sm hover:bg-gray-100 cursor-pointer ${
                  value === option
                    ? "bg-[#d2d2d2] font-medium text-black"
                    : "text-gray-700"
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
