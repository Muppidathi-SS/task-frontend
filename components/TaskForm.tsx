"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";

import useTasks from "@/hooks/useTasks";

import Input from "@/ui/Input";
import Dropdown from "@/ui/Dropdown";
import Button from "@/ui/Button";
import DatePicker from "@/ui/DatePicker";
import {
  addTaskForm,
  categoryOptions,
  focusOptions,
  priorityOptions,
  statusOptions,
} from "@/constants/tasks";
import { TaskResponse } from "@/types/tasks";
import Loading from "@/ui/Loading";

interface TaskFormProps {
  mode: string;
  task?: TaskResponse;
  onClose: () => void;
}

export default function TaskForm({ mode, task, onClose }: TaskFormProps) {
  const { addTaskMutation, updateTaskMutation } = useTasks();

  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("Pending");
  const [priority, setPriority] = useState("Easy");
  const [category, setCategory] = useState("Learning");
  const [focused, setFocused] = useState("False");
  const [focusDueDate, setFocusDueDate] = useState<Date | undefined>();

  const clearForm = () => {
    setTaskName("");
    setStatus("Pending");
    setPriority("Easy");
    setCategory("Learning");
    setFocused("False");
    setFocusDueDate(undefined);
  };

  useEffect(() => {
    if (!task) {
      clearForm();
      return;
    }

    setTaskName(task.task_name);
    setStatus(task.status);
    setPriority(task.priority);
    setCategory(task.category_name);
    setFocused(task.is_focused ? "True" : "False");

    if (task.focus_due_date) {
      setFocusDueDate(
        task.focus_due_date ? new Date(task.focus_due_date) : undefined,
      );
    } else {
      setFocusDueDate(undefined);
    }
  }, [task]);

  const handleSubmit = () => {
    const payload = {
      task_name: taskName,
      status,
      priority,
      category_name: category,
      is_focused: focused === "True",
      focus_due_date: focusDueDate ? format(focusDueDate, "yyyy-MM-dd") : null,
    };

    if (mode === "add") {
      addTaskMutation.mutate(payload, {
        onSuccess: () => {
          clearForm();
          onClose();
        },
      });
    } else {
      updateTaskMutation.mutate(
        {
          task_id: task?.task_id || "",
          payload,
        },
        {
          onSuccess: () => {
            onClose();
          },
        },
      );
    }
  };

  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <Input
          type="text"
          label="Enter the Name"
          placeholder={addTaskForm.placeholder}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <Dropdown
          value={status}
          label="Status"
          dropdownValues={statusOptions}
          onChange={setStatus}
        />

        <Dropdown
          value={priority}
          label="Priority"
          dropdownValues={priorityOptions}
          onChange={setPriority}
        />

        <Dropdown
          value={category}
          label="Category"
          dropdownValues={categoryOptions}
          onChange={setCategory}
        />

        <Dropdown
          value={focused}
          label="Is Focused"
          dropdownValues={focusOptions}
          onChange={setFocused}
        />

        <DatePicker
          label="Completion Date"
          value={focusDueDate}
          onChange={setFocusDueDate}
        />

        <Button
          buttonLabel={task ? "Update Task" : addTaskForm.buttonLabelName}
          onClick={handleSubmit}
        />
      </div>

      {addTaskMutation.isPending && (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-2xl font-medium text-gray-800">Loadin.</h1>
          <Loading />
        </div>
      )}
    </>
  );
}
