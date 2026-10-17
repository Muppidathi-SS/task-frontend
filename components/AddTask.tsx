"use client";

import { useState } from "react";
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
import LoadingPopup from "@/ui/LoadingPopup";

export default function AddTask() {
  const { addTaskMutation } = useTasks();

  const [taskName, setTaskName] = useState<string>("");
  const [status, setStatus] = useState<string>("Pending");
  const [priority, setPriority] = useState<string>("Medium");
  const [category, setCategory] = useState<string>("Learning");
  const [focused, setFocused] = useState<string>("false");
  const [focusDueDate, setFocusDueDate] = useState<Date | undefined>();

  const clearForm = () => {
    setTaskName("");
    setStatus("pending");
    setPriority("medium");
    setCategory("Learning");
    setFocused("False");
    setFocusDueDate(undefined);
  };

  const handleAdd = () => {
    const payload = {
      task_name: taskName,
      status,
      priority,
      category_name: category,
      is_focused: focused === "True" ? true : false,
      focus_due_date: focusDueDate ? format(focusDueDate, "yyyy-MM-dd") : null,
    };
    addTaskMutation.mutate(payload);
    clearForm();
  };

  return (
    <>
      <div className="w-full gap-4 flex flex-col">
        <Input
          type="text"
          placeholder={addTaskForm.placeholder}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Dropdown
          value={status}
          dropdownValues={statusOptions}
          onChange={(option) => setStatus(option)}
        />
        <Dropdown
          value={priority}
          dropdownValues={priorityOptions}
          onChange={(option) => setPriority(option)}
        />
        <Dropdown
          value={category}
          dropdownValues={categoryOptions}
          onChange={(option) => setCategory(option)}
        />
        <Dropdown
          value={focused}
          dropdownValues={focusOptions}
          onChange={(option) => setFocused(option)}
        />
        <DatePicker value={focusDueDate} onChange={setFocusDueDate} />
        <Button buttonLabel={addTaskForm.buttonLabelName} onClick={handleAdd} />
      </div>
      {addTaskMutation.isPending && <LoadingPopup />}
    </>
  );
}
