import { get } from "../request";

export const taskApi = {
  getTasks: async function getTasks() {
    const result = get("/api/tasks");
    return result;
  },
};