import { TaskPayload } from "@/types/tasks";
import { get, post } from "../request";

export const taskApi = {
  getTasks: async function getTasks() {
    const result = get("/api/tasks");
    return result;
  },
  postTask: async function postTask(payload: TaskPayload) {
    const result = post("/api/tasks/task", payload);
    return result;
  },
};
