import AppCounter from "./components/AppCounter";
import PieChartComponent from "./components/Pie";
import ApplicationsTable from "./components/applications";
import { ModeToggle } from "./components/mode-toggle";

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
          <AppCounter />
          <PieChartComponent />
        </div>
        <ApplicationsTable />
      </main>
    </div>
  );
}

export default App;
