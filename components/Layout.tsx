"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "./Dashboard";
import Popup from "@/ui/Popup";
import TaskForm from "./TaskForm";
import Home from "./Home";
import { TabType } from "@/constants/navbar";
import Tasks from "./Task";

export default function Layout() {
  const [activeTab, setActiveTab] = useState<TabType>("home");

  return (
    <div className="flex min-h-screen w-full bg-[#F4F5F7] text-black">
      <aside className="sticky top-0 flex h-screen w-84 shrink-0 flex-col border-r border-gray-200 bg-white">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>
      <main className="min-w-0 flex-1 px-5 py-4">
        {activeTab === "add-task" && (
          <Popup title="Add Task" onClose={() => setActiveTab("home")}>
            <TaskForm mode="add" onClose={() => setActiveTab("home")} />
          </Popup>
        )}
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "home" && <Dashboard />}
        {activeTab === "tasks" && <Tasks />}
      </main>
    </div>
  );
}
