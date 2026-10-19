import { Icons } from "@/icons/icons";
import { Status, Today, Upcoming } from "@/types/home";

export const STATUS: Status[] = [
  {
    labelName: "Total Tasks",
    value: 30,
    iconName: Icons.TotalIcon,
  },
  {
    labelName: "In progress",
    value: 45,
    iconName: Icons.InprogressIcon,
  },
  {
    labelName: "Completed",
    value: 30,
    iconName: Icons.CompletedIcon,
  },
  {
    labelName: "This Week",
    value: 30,
    iconName: Icons.WeekIcon,
  },
];

export const TODAY: Today[] = [
  {
    taskName: "Worked on tetsing the sign module.",
    taskStatus: "In Progress",
  },
  {
    taskName: "Worked 360 button for guardrail module",
    taskStatus: "Completed",
  },
  {
    taskName: "Worked on CRUD For Zone",
    taskStatus: "Pending",
  },
];

export const UPCOMING: Upcoming[] = [
  {
    taskName: "Worked on tetsing the sign module.",
    taskDate: "Nov 2, 2026",
  },
  {
    taskName: "Worked 360 button for guardrail module",
    taskDate: "Nov 4, 2026",
  },
  {
    taskName: "Worked on CRUD For Zone",
    taskDate: "Nov 5, 2026",
  },
];
