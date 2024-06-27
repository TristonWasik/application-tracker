import { applications } from "./applications";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PieSlice } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BuildDataFromApplications = (): {
  pie: PieSlice[];
} => {
  const Interviews = applications.filter(
    (f) => f.status === "Interviewed"
  ).length;
  const Accepted = applications.filter((f) => f.status === "Accepted").length;
  const Rejections = applications.filter((f) => f.status === "Rejected").length;
  const NoResponses = applications.filter((f) => f.status === "Applied").length;
  const Assessments = applications.filter(
    (f) => f.status === "Assessment"
  ).length;

  return {
    pie: [
      ["No Response", NoResponses],
      ["Rejected", Rejections],
      ["Assessment", Assessments],
      ["Interviewed", Interviews],
      ["Accepted", Accepted],
    ],
  };
};
