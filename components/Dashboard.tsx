"use client";

import { useEffect, useState } from "react";
import Table from "@/ui/Table";
import Button from "@/ui/Button";
import Popup from "@/ui/Popup";
import LoadingPopup from "@/ui/LoadingPopup";
import { TaskResponse } from "@/types/tasks";
import TaskForm from "./TaskForm";
import useTasks from "@/hooks/useTasks";

type Mode = "edit" | "delete" | "add" | null;

export default function Dashboard() {
  const [selecetedTask, setSelectedTask] = useState<TaskResponse | null>(null);
  const [mode, setMode] = useState<Mode>(null);
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const { getTasks, getTaskById } = useTasks(selectedTaskId);
  const { data: rows } = getTasks;
  const { data: taskData, isPending: isTaskLoading } = getTaskById;

  const handleAction = (action: "edit" | "delete", id: string) => {
    if (action === "edit") {
      setSelectedTaskId(id);
      setMode("edit");
    }

    if (action === "delete") {
      setMode("delete");
    }
  };
  useEffect(() => {
    if (mode === "edit" && taskData) {
      const task = taskData.data[0];
      setSelectedTask(task);
      console.log(task);
    }
  }, [taskData, mode]);

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
        <Popup title="Edit Task" onClose={() => setMode(null)}>
          {selecetedTask ? (
            <TaskForm
              mode="edit"
              task={selecetedTask}
              onClose={() => setMode(null)}
            />
          ) : (
            <LoadingPopup />
          )}
        </Popup>
      )}
      {mode === "add" && (
        <Popup
          title="Add Task"
          onClose={() => setMode(null)}
          children={<TaskForm mode={"add"} onClose={() => setMode(null)} />}
        />
      )}
      {getTasks.isPending && <LoadingPopup />}
    </>
  );
}
