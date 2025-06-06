import { useSelector } from 'react-redux';
import ProgressBar from '../common/ProgressBar';
import formatCurrency from '../../utils/formatCurrency';

function BudgetList() {
  const { budgets } = useSelector((state) => state.budgets);
  const { transactions } = useSelector((state) => state.transactions);

  const calculateSpent = (category) => {
    return transactions
      .filter((t) => t.type === 'expense' && t.category === category)
      .reduce((sum, t) => sum + t.amount, 0);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {budgets.map((budget) => {
        const spent = calculateSpent(budget.category);
        const percentage = Math.min((spent / budget.limit) * 100, 100);
        return (
          <div key={budget.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{budget.category}</h2>
            <p>Limit: {formatCurrency(budget.limit)}</p>
            <p>Spent: {formatCurrency(spent)}</p>
            <ProgressBar percentage={percentage} />
          </div>
        );
      })}
    </div>
  );
}

export default BudgetList;