"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { taskApi } from "@/services/tasks/task";

export default function useTasks() {
  const queryClient = useQueryClient();

  const getTasks = useQuery({
    queryKey: ["tasks"],
    queryFn: taskApi.getTasks,
  });

  const addTaskMutation = useMutation({
    mutationFn: taskApi.postTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  return { getTasks, addTaskMutation };
}
