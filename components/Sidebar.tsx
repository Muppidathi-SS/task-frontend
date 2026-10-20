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
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex w-full cursor-pointer items-center gap-3 rounded-full px-6 py-3 text-[18px] transition ${
              isActive
                ? "bg-[#1e293b] font-medium text-white"
                : "text-black hover:bg-gray-100"
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
