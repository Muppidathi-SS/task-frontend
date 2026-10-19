import type { SvgIconComponent } from "@mui/icons-material";

export interface Status {
  labelName: string;
  value: number;
  iconName: SvgIconComponent;
}

export interface Today {
  taskName: string;
  taskStatus: string;
}

export interface Upcoming {
  taskName: string;
  taskDate: string;
}

