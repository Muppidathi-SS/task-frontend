"use client";

import { menuItems, TabType } from "@/constants/navbar";
import { Icons } from "@/icons/icons";

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <nav className="flex-1 space-y-2 px-3 py-6">
      <button
        onClick={() => setActiveTab("add-task")} 
        className="flex w-full cursor-pointer gap-3 rounded-md text-[18px] transitiom bg-black text-white py-2 shadow justify-center items-center mb-6"
      >
        <Icons.AddTaskIcon sx={{ fontSize: 21 }} />
        <span>Add Task</span>
      </button>
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex w-full cursor-pointer items-center gap-3 rounded-full p-1 text-[18px] transition ${
              isActive ? "font-medium text-black" : "text-gray-400"
            }`}
          >
            <Icon sx={{ fontSize: 19 }} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
