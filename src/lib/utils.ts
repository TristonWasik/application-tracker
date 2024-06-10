import { applications } from "./applications";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PieSlice, SankeyNode } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BuildDataFromApplications = (): {
  sankey: SankeyNode[];
  pie: PieSlice[];
} => {
  const Interviews = applications.filter((f) => !!f.interviewedAt).length;
  const Accepted = applications.filter((f) => !!f.acceptedAt).length;
  const Rejections = applications.filter((f) => !!f.rejectedAt).length;
  const NoResponses = applications.filter(
    (f) => !f.acceptedAt && !f.interviewedAt && !f.rejectedAt && !f.assessmentAt
  ).length;
  const Assessments = applications.filter((f) => !!f.assessmentAt).length;

  return {
    sankey: [
      ["From", "To", "Count"],
      ["Applied", "Interviewed", Interviews],
      ["Applied", "Rejected", Rejections],
      ["Applied", "No Response", NoResponses],
      ["Applied", "Accepted", Accepted],
      ["Applied", "Assessment", Assessments],
    ],
    pie: [
      ["No Response", NoResponses],
      ["Rejected", Rejections],
      ["Assessment", Assessments],
      ["Interviewed", Interviews],
      ["Accepted", Accepted],
    ],
  };
};
