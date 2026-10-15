"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button as ShadcnButton } from "@/ui/shadcn/ui/button";
import { Calendar } from "@/ui/shadcn/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/shadcn/ui/popover";

interface DatePickerProps {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  placeholder?: string;
}

export default function DatePicker({
  value,
  onChange,
  placeholder = "Select Focus Due Date",
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <ShadcnButton
            type="button"
            variant="outline"
            className="flex h-12 w-full justify-start rounded-xl border border-gray-300 px-6 py-3 text-left font-normal shadow-sm hover:bg-white"
          >
            <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
            <span>{value ? format(value, "PPP") : placeholder}</span>
          </ShadcnButton>
        }
      ></PopoverTrigger>

      <PopoverContent align="start" sideOffset={4} className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          captionLayout="dropdown"
        />
      </PopoverContent>
    </Popover>
  );
}
