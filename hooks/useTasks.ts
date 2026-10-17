"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { taskApi } from "@/services/tasks/task";
import { TaskPayload } from "@/types/tasks";

interface UpdateTaskVariables {
  task_id: string;
  payload: TaskPayload;
}

export default function useTasks(task_id?: string) {
  const queryClient = useQueryClient();

  const getTasks = useQuery({
    queryKey: ["tasks"],
    queryFn: taskApi.getTasks,
  });

  const getTaskById = useQuery({
    queryKey: ["task", task_id],
    queryFn: () => taskApi.getTaskById(task_id!),
    enabled: !!task_id,
  });

  const addTaskMutation = useMutation({
    mutationFn: taskApi.postTask,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: ({ task_id, payload }: UpdateTaskVariables) =>
      taskApi.updateTask(task_id, payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({
        queryKey: ["task", variables.task_id],
      });
    },
  });

  const deleteTaskMutation = useMutation({
    mutationFn: (task_id: string) => taskApi.deleteTask(task_id),
    onSuccess: (_, task_id) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.removeQueries({ queryKey: ["task", task_id] });
    },
  });

  return {
    getTasks,
    getTaskById,
    addTaskMutation,
    updateTaskMutation,
    deleteTaskMutation,
  };
}
