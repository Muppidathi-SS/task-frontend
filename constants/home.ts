import { Icons } from "@/icons/icons";
import type { SvgIconComponent } from "@mui/icons-material";

interface Status {
  labelName: string;
  value: number;
  iconName: SvgIconComponent;
}

export const STATUS: Status[] = [
  {
    labelName: "Total Tasks",
    value: 30,
    iconName: Icons.TotalIcon,
  },
  {
    labelName: "This Week",
    value: 45,
    iconName: Icons.WeekIcon,
  },
  {
    labelName: "Total Tasks",
    value: 30,
    iconName: Icons.TotalIcon,
  },
  {
    labelName: "Total Tasks",
    value: 30,
    iconName: Icons.TotalIcon,
  },
];
