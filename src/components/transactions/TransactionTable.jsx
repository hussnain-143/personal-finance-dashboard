import { useSelector } from 'react-redux';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/dateUtils';

function TransactionTable() {
  const { transactions } = useSelector((state) => state.transactions);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Description</th>
            <th className="text-left p-2">Amount</th>
            <th className="text-left p-2">Type</th>
            <th className="text-left p-2">Category</th>
            <th className="text-left p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b">
              <td className="p-2">{transaction.description}</td>
              <td className="p-2">{formatCurrency(transaction.amount)}</td>
              <td className="p-2">{transaction.type}</td>
              <td className="p-2">{transaction.category}</td>
              <td className="p-2">{formatDate(transaction.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;