import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function ChartComponent({ type, data }) {
  return (
    <div className="w-full max-w-md mx-auto">
      {type === 'pie' && <Pie data={data} />}
      {type === 'line' && <Line data={data} />}
    </div>
  );
}

export default ChartComponent;