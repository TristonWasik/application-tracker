const foundAtOptions = [
  "linkedin",
  "indeed",
  "weworkremotely",
  "commitasync",
  "wellfound",
] as const;
export type foundAt = (typeof foundAtOptions)[number];

export type Application = {
  name: string;
  foundAt: foundAt;
  role: string;
  website: string;
  assessmentAt?: string;
  status: status;
  appliedAt: string;
  interviewedAt?: string;
  rejectedAt?: string;
  acceptedAt?: string;
};

const statusOptions = [
  "Applied",
  "Rejected",
  "No Response",
  "Interviewed",
  "Assessment",
  "Accepted",
  "To",
] as const;
export type status = (typeof statusOptions)[number];

/**
 * From, To, Count
 */
export type SankeyNode = [string, status, number | string];
export type PieSlice = [status, number];
