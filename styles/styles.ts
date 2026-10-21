enum STATUS_MESSAGE {
  INPROGRESS = "In Progress",
  COMPLETED = "Completed",
  PENDING = "Pending",
}

const TASK_STATUS_STYLES = {
  in_progress: "text-amber-400 bg-amber-100 border-amber-400",
  completed: "bg-green-100  border-green-400 text-green-400",
  pending: "text-red-400 bg-red-100 border-red-400",
};

const UPCOMING_STYLE = "text-gray-500 bg-gray-100 border-gray-500";

export const getStatusColors = (label: string) => {
  if (label === STATUS_MESSAGE.INPROGRESS)
    return TASK_STATUS_STYLES.in_progress;
  if (label === STATUS_MESSAGE.COMPLETED) return TASK_STATUS_STYLES.completed;
  return TASK_STATUS_STYLES.pending;
};

export const getUpcomingColors = () => {
  return UPCOMING_STYLE;
};