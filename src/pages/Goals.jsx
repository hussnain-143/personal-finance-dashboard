
import GoalForm from '../components/goals/GoalForm';
import GoalTracker from '../components/goals/GoalTracker';

function Goals() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Financial Goals</h1>
      <GoalForm />
      <GoalTracker />
    </div>
  );
}

export default Goals;
