import { Bar } from "react-chartjs-2";
import { useAppSelector } from "../hooks/useRedux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  // 🔹 Replace these with real values from props, Redux, or API
   const userRole = useAppSelector((state) => state.auth.role);

  const booksCount = 20;
  const membersCount = 50;
  const borrowsCount = 15;
  const overdueCount = 5;

  const data = {
    labels: ["Books", "Members", "Borrows", "Overdue"],
    datasets: [
      {
        label: "Count",
        data: [booksCount, membersCount, borrowsCount, overdueCount],
        backgroundColor: ["#3b82f6", "#ef4444", "#22c55e", "#f59e42"],
      },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Welcome to the Dashboard!</h1>
      <Bar data={data} />
      {/* Add other stats or components here */}
      <div>
      <h1>Dashboard</h1>
      {userRole === "admin" && (
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Admin Controls
        </button>
      )}
    </div>


    </div>
  );
}

export default Dashboard;