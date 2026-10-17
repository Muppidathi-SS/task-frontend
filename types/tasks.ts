export type TaskPayload = {
  task_name: string;
  status: string;
  priority: string;
  category_name: string;
  is_focused: boolean;
  focus_due_date: string | null;
};

export interface TaskResponse {
  task_id: string;
  user_id: string;
  task_name: string;
  status: string;
  priority: string;
  category_name: string;
  is_focused: boolean;
  focus_due_date: Date | undefined;
  created_at: string;
  updated_at: string;
}

export type TaskResponseList = TaskResponse[];
