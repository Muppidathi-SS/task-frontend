import { Icons } from "@/icons/icons";
export type TabType = "dashboard" | "add-task" | "home" | "tasks";

export const menuItems = [
  {
    id: "add-task" as TabType,
    label: "Add Task",
    icon: Icons.AddTaskIcon,
  },
  {
    id: "home" as TabType,
    label: "Home",
    icon: Icons.HomeIcon,
  },
  //   {
  //     id: "dashboard" as TabType,
  //     label: "Dashboard",
  //     icon: Icons.DashboardIcon,
  //   },
  {
    id: "tasks" as TabType,
    label: "Tasks",
    icon: Icons.TotalIcon,
  },
];
