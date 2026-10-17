"use client";

import { useState } from "react";
import Sidebar, { type TabType } from "@/components/Sidebar";
import Dashboard from "./Dashboard";
import Popup from "@/ui/Popup";
import TaskForm from "./TaskForm";

export default function Layout() {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");

  return (
    <div className="flex min-h-screen w-full bg-white text-black">
      <aside className="sticky top-0 flex h-screen w-104 shrink-0 flex-col border-r border-gray-200 bg-white">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>
      <main className="min-w-0 flex-1 px-5 py-4">
        {activeTab === "add-task" && (
          <Popup title="Add Task" onClose={() => setActiveTab("dashboard")}>
            <TaskForm mode="add" onClose={() => setActiveTab("dashboard")} />
          </Popup>
        )}
        {activeTab === "dashboard" && <Dashboard />}
      </main>
    </div>
  );
}
