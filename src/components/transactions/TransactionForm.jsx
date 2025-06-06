
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../redux/slices/transactionSlice';
import FormInput from '../common/FormInput';

function TransactionForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ description: '', amount: '', type: 'income', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction({ ...form, id: Date.now(), date: new Date().toISOString(), amount: Number(form.amount) }));
    setForm({ description: '', amount: '', type: 'income', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow">
      <FormInput
        label="Description"
        type="text"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />
      <FormInput
        label="Amount"
        type="number"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        required
      />
      <div className="mb-2">
        <label className="block">Type</label>
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <FormInput
        label="Category"
        type="text"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
