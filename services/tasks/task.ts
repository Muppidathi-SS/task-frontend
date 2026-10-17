import { TaskPayload } from "@/types/tasks";
import { del, get, post, put } from "../request";

export const taskApi = {
  getTasks: async function getTasks() {
    const result = get("/api/tasks");
    return result;
  },
  postTask: async function postTask(payload: TaskPayload) {
    const result = post("/api/tasks/task", payload);
    return result;
  },
  getTaskById: async function getTaskById(task_id: string) {
    const result = await get(`/api/tasks/${task_id}`);
    return result;
  },
  updateTask: async function updateTask(task_id: string, payload: TaskPayload) {
    return put(`/api/tasks/${task_id}`, payload);
  },
  deleteTask: async function deleteTask(task_id: string) {
    return del(`/api/tasks/${task_id}`);
  },
};
