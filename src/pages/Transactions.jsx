
import TransactionForm from '../components/transactions/TransactionForm';
import TransactionTable from '../components/transactions/TransactionTable';

function Transactions() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <TransactionForm />
      <TransactionTable />
    </div>
  );
}

export default Transactions;
