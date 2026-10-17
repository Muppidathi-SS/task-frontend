"use client";

import { useState } from "react";
import Table from "@/ui/Table";
import AddTask from "./AddTask";
import Button from "@/ui/Button";
import Popup from "@/ui/Popup";
import useTasks from "@/hooks/useTasks";
import LoadingPopup from "@/ui/LoadingPopup";

type Mode = "edit" | "delete" | "add" | null;

export default function Dashboard() {
  const { getTasks } = useTasks();
  const { data: rows } = getTasks;
  const [mode, setMode] = useState<Mode>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const handleAction = (action: "edit" | "delete", id: string) => {
    setMode(action);
    setSelectedTaskId(id);
  };

  return (
    <>
      <div className="flex justify-end">
        <div className="w-50">
          <Button
            buttonLabel="Add Task"
            icon={true}
            onClick={() => setMode("add")}
          />
        </div>
      </div>
      <div className="mt-4">
        <Table rows={rows?.data ?? []} onClick={handleAction} />
      </div>

      {mode === "edit" && selectedTaskId && (
        <Popup
          title="Edit Task"
          onClose={() => setMode(null)}
          children={<AddTask />}
        />
      )}
      {mode === "add" && (
        <Popup
          title="Add Task"
          onClose={() => setMode(null)}
          children={<AddTask />}
        />
      )}
      {getTasks.isPending && <LoadingPopup />}
    </>
  );
}
