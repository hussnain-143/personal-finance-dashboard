import { useSelector } from 'react-redux';
import SummaryCard from '../components/dashboard/SummaryCard';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import formatCurrency from '../utils/formatCurrency';

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const { transactions } = useSelector((state) => state.transactions);
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0, 0);
  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0, 0);

  const chartData = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Financial Overview',
        data: [totalIncome, totalExpenses],
        backgroundColor: ['#4ECDC4', '#FF6B6B'],
        borderColor: ['#FFFFFF', '#FFFFFF'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <SummaryCard title="Total Income" value={totalIncome} />
        <SummaryCard title="Total Expenses" value={totalExpenses} />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Financial Overview</h2>
        <div className="w-full max-w-md mx-auto">
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
