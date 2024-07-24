import AppCounter from "./components/AppCounter";
import BarChartComponent from "./components/Bar";
import LineChartComponent from "./components/Line";
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
      <main className="flex flex-col w-[100vw] md:w-[70vw] m-auto">
        <div className="flex sm:hidden p-2 mb-4">
          <p className="outline outline-purple-600 p-2 rounded-md bg-purple-300/20">
            Note: Some data visualizations are hidden due to your screen size.
            Please use a larger device to see more data visualizations.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-20 justify-center">
          <AppCounter />
          <PieChartComponent />
        </div>
        <div className="hidden sm:flex items-center justify-center mt-8">
          <LineChartComponent />
        </div>
        <div className="hidden sm:flex items-center justify-center mt-8">
          <BarChartComponent />
        </div>
        <ApplicationsTable />
      </main>
    </div>
  );
}

export default App;
