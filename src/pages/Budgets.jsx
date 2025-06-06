
import BudgetForm from '../components/budgets/BudgetForm';
import BudgetList from '../components/budgets/BudgetList';

function Budgets() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Budgets</h1>
      <BudgetForm />
      <BudgetList />
    </div>
  );
}

export default Budgets;
