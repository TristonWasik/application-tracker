import PieChartComponent from "./components/Pie";
import ApplicationsTable from "./components/applications";
import { ModeToggle } from "./components/mode-toggle";
import { applications } from "./lib/applications";

function App() {
  return (
    <div className="flex flex-col">
      <nav className="flex border-b p-4 mb-4 justify-between w-full md:w-[60vw] m-auto items-center">
        <h1>Applications</h1>
        <a
          href="https://tristonwasik.com"
          target="_blank"
          className="hover:text-blue-700 dark:hover:text-blue-300"
        >
          My Portfolio
        </a>
        <ModeToggle />
      </nav>
      <main className="flex flex-col m-auto">
        <div className="flex items-center gap-20 justify-center">
          <span className="outline p-6 rounded-xl flex flex-col items-center">
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
          <PieChartComponent />
        </div>
        <ApplicationsTable />
      </main>
    </div>
  );
}

export default App;
