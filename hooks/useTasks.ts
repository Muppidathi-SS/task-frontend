"use client";

import { taskApi } from "@/services/tasks/task";
import { useQuery } from "@tanstack/react-query";

export default function useTasks() {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: taskApi.getTasks,
    enabled: false,
  });
}