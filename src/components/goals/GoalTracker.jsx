import { useSelector } from 'react-redux';
import ProgressBar from '../common/ProgressBar';
import formatCurrency from '../../utils/formatCurrency';

function GoalTracker() {
  const { goals } = useSelector((state) => state.goals);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {goals.map((goal) => {
        const percentage = Math.min((goal.current / goal.target) * 100, 100);
        return (
          <div key={goal.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{goal.name}</h2>
            <p>Target: {formatCurrency(goal.target)}</p>
            <p>Current: {formatCurrency(goal.current)}</p>
            <ProgressBar percentage={percentage} />
          </div>
        );
      })}
    </div>
  );
}

export default GoalTracker;