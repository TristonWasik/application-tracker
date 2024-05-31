import PieChartComponent from "./components/Pie";
import ApplicationsTable from "./components/applications";
import { ModeToggle } from "./components/mode-toggle";
import { applications } from "./lib/applications";

function App() {
  return (
    <div className="flex flex-col">
      <nav className="flex border-b p-4 mb-4 justify-end">
        <ModeToggle />
      </nav>
      <main className="flex flex-col m-auto">
        <div className="flex items-center gap-20 justify-center">
          <span className="outline p-6 rounded-xl flex flex-col items-center">
            <div className="font-bold text-4xl mb-2">{applications.length}</div>
            <p className="font-semibold text-xl">Apps</p>
            <p className="font-light text-xs">5/31/24</p>
          </span>
          <PieChartComponent />
        </div>
        <ApplicationsTable />
      </main>
    </div>
  );
}

export default App;
