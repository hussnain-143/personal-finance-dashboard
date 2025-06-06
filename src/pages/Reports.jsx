
import { useSelector } from 'react-redux';
import ChartComponent from '../components/reports/ChartComponent';

function Reports() {
  const { transactions } = useSelector((state) => state.transactions);

  const categoryData = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const pieChartData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        label: 'Expenses by Category',
        data: Object.values(categoryData),
        backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'],
        borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
        borderWidth: 1,
      },
    ],
  };

  const monthlyData = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => {
      const month = new Date(t.date).toLocaleString('default', { month: 'short', year: 'numeric' });
      acc[month] = (acc[month] || 0) + t.amount;
      return acc;
    }, {});

  const lineChartData = {
    labels: Object.keys(monthlyData),
    datasets: [
      {
        label: 'Monthly Expenses',
        data: Object.values(monthlyData),
        borderColor: '#4ECDC4',
        backgroundColor: '#4ECDC4',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Expenses by Category</h2>
          <ChartComponent type="pie" data={pieChartData} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Monthly Expenses</h2>
          <ChartComponent type="line" data={lineChartData} />
        </div>
      </div>
    </div>
  );
}

export default Reports;