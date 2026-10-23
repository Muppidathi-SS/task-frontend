import { Icons } from "@/icons/icons";
export type TabType = "dashboard" | "add-task" | "home" | "tasks";

export const menuItems = [
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
