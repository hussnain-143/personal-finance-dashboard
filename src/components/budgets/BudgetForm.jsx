import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBudget } from '../../redux/slices/budgetSlice';
import FormInput from '../common/FormInput';

function BudgetForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ category: '', limit: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBudget({ ...form, id: Date.now(), limit: Number(form.limit) }));
    setForm({ category: '', limit: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow">
      <FormInput
        label="Category"
        type="text"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      />
      <FormInput
        label="Budget Limit (PKR)"
        type="number"
        value={form.limit}
        onChange={(e) => setForm({ ...form, limit: e.target.value })}
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Budget
      </button>
    </form>
  );
}

export default BudgetForm;
