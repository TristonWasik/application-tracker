import { applications } from "@/lib/applications";

export default function AppCounter() {
  return (
    <span
      data-testid="appCounter"
      className="outline p-6 rounded-xl flex flex-col items-center"
    >
      <div className="font-bold text-4xl mb-2">{applications.length}</div>
      <p className="font-semibold text-xl">Apps</p>
      <p className="font-light text-xs">
        {
          applications
            .sort((a, b) =>
              new Date(a.appliedAt) > new Date(b.appliedAt) ? -1 : 1
            )
            .at(-1)?.appliedAt
        }{" "}
        -
      </p>
      <p className="font-light text-xs">
        {
          applications.sort((a, b) =>
            new Date(a.appliedAt) > new Date(b.appliedAt) ? -1 : 1
          )[0].appliedAt
        }
      </p>
    </span>
  );
}
