"use client";

import { useEffect, useState } from "react";
import { format, parseISO, isValid } from "date-fns";

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
import LoadingPopup from "@/ui/LoadingPopup";
import { TaskResponse } from "@/types/tasks";

interface TaskFormProps {
  mode: string;
  task?: TaskResponse;
  onClose: () => void;
}

export default function TaskForm({ mode, task, onClose }: TaskFormProps) {
  const { addTaskMutation, updateTaskMutation } = useTasks();

  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("pending");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("Learning");
  const [focused, setFocused] = useState("False");
  const [focusDueDate, setFocusDueDate] = useState<Date | undefined>();

  const clearForm = () => {
    setTaskName("");
    setStatus("pending");
    setPriority("medium");
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
          placeholder={addTaskForm.placeholder}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <Dropdown
          value={status}
          dropdownValues={statusOptions}
          onChange={setStatus}
        />

        <Dropdown
          value={priority}
          dropdownValues={priorityOptions}
          onChange={setPriority}
        />

        <Dropdown
          value={category}
          dropdownValues={categoryOptions}
          onChange={setCategory}
        />

        <Dropdown
          value={focused}
          dropdownValues={focusOptions}
          onChange={setFocused}
        />

        <DatePicker value={focusDueDate} onChange={setFocusDueDate} />

        <Button
          buttonLabel={task ? "Update Task" : addTaskForm.buttonLabelName}
          onClick={handleSubmit}
        />
      </div>

      {addTaskMutation.isPending && <LoadingPopup />}
    </>
  );
}
