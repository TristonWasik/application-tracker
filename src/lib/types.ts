const foundAtOptions = [
  "linkedin",
  "indeed",
  "weworkremotely",
  "commitasync",
  "wellfound",
  "direct",
  "roberthalf",
  "calmjobs",
  "workatastartup",
  "greenhouse",
  "lever",
] as const;
export type foundAt = (typeof foundAtOptions)[number];

export const jobBoardOptions = [
  {
    name: "Greenhouse",
    url: "https://boards.greenhouse.io",
    searchTerm: "boards.greenhouse.io",
  },
  {
    name: "Lever",
    url: "https://jobs.lever.co",
    searchTerm: "jobs.lever.co",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com",
    searchTerm: "linkedin.com",
  },
  {
    name: "Indeed",
    url: "https://www.indeed.com",
    searchTerm: "indeed.com",
  },
  {
    name: "CommitAsync",
    url: "https://www.commitasync.com",
    searchTerm: "commitasync.com",
  },
  {
    name: "Wellfound",
    url: "https://wellfound.com",
    searchTerm: "wellfound.com",
  },
  {
    name: "Robert Half",
    url: "https://www.roberthalf.com",
    searchTerm: "roberthalf.com",
  },
];

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
  notes?: string | string[];
  salary?: {
    min: number;
    max: number;
  };
};

export const statusOptions = [
  "Applied",
  "Rejected",
  "Interviewed",
  "Pending Interview",
  "Pending Technical Interview",
  "Assessment",
  "Offer",
  "Accepted",
] as const;
/**
 * Status of application
 * - Applied: the initial status
 * - Rejected: Received a rejection via email, phone, or whatever
 * - Interviewed: Have a scheduled interview or had one in the past
 * - Assessment: Took a takehome assessment
 * - Offer: The company offered the job
 * - Accepted: Accepted an offer
 */
export type status = (typeof statusOptions)[number];

export type PieSlice = [status | "No Response", number];
export type LineChartDataPoint = { [month: string]: number } & {
  date?: string;
  day: number;
};
