import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COLORS = [
  "#FF6B6B",
  "#6C5CE7",
  "#00B894",
  "#E17055",
  "#0984E3",
  "#FD79A8",
  "#FDCB6E",
  "#A29BFE",
  "#D63031",
  "#00CEC9",
];

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}
