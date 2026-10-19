"use client";

import { useEffect, useState } from "react";
import Table from "@/ui/Table";
import Button from "@/ui/Button";
import Popup from "@/ui/Popup";
import LoadingPopup from "@/ui/LoadingPopup";
import { TaskResponse } from "@/types/tasks";
import TaskForm from "./TaskForm";
import useTasks from "@/hooks/useTasks";
import StatusCard from "./StatusCard";
import ShowTasks from "./ShowTasks";
import { TODAY, UPCOMING } from "@/constants/home";

type Mode = "edit" | "delete" | "add" | null;

export default function Dashboard() {
  const [selectedTask, setSelectedTask] = useState<TaskResponse | null>(null);
  const [mode, setMode] = useState<Mode>(null);
  const [selectedTaskId, setSelectedTaskId] = useState("");

  const { getTasks, getTaskById, deleteTaskMutation } =
    useTasks(selectedTaskId);

  const { data: rows, isPending: isTasksLoading } = getTasks;
  const { data: taskData, isPending: isTaskLoading } = getTaskById;

  const handleAction = (action: "edit" | "delete", id: string) => {
    if (action === "edit") {
      setSelectedTask(null);
      setSelectedTaskId(id);
      setMode("edit");
      return;
    }

    if (action === "delete") {
      deleteTaskMutation.mutate(id);
    }
  };

  useEffect(() => {
    if (mode === "edit" && taskData?.data) {
      const task = Array.isArray(taskData.data)
        ? taskData.data[0]
        : taskData.data;

      if (task) {
        setSelectedTask(task);
      }
    }
  }, [taskData, mode]);

  const closePopup = () => {
    setMode(null);
    setSelectedTaskId("");
    setSelectedTask(null);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <StatusCard />
        </div>
      </div>
      <div className="flex justify-end mt-5">
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

      {mode === "edit" && (
        <Popup title="Edit Task" onClose={closePopup}>
          {isTaskLoading || !selectedTask ? (
            <LoadingPopup />
          ) : (
            <TaskForm mode="edit" task={selectedTask} onClose={closePopup} />
          )}
        </Popup>
      )}

      {mode === "add" && (
        <Popup title="Add Task" onClose={closePopup}>
          <TaskForm mode="add" onClose={closePopup} />
        </Popup>
      )}

      {(isTasksLoading || deleteTaskMutation.isPending) && <LoadingPopup />}

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2">
          <ShowTasks mode={"today"} tasks={TODAY} />
        </div>
        <div className="col-span-2">
          <ShowTasks mode={"update"} tasks={UPCOMING} />
        </div>
      </div>
    </>
  );
}
