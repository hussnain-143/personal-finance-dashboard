import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGoal } from '../../redux/slices/goalSlice';
import FormInput from '../common/FormInput';

function GoalForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', target: '', current: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addGoal({ ...form, id: Date.now(), target: Number(form.target), current: Number(form.current) }));
    setForm({ name: '', target: '', current: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow">
      <FormInput
        label="Goal Name"
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <FormInput
        label="Target Amount ($)"
        type="number"
        value={form.target}
        onChange={(e) => setForm({ ...form, target: e.target.value })}
        required
      />
      <FormInput
        label="Current Amount ($)"
        type="number"
        value={form.current}
        onChange={(e) => setForm({ ...form, current: e.target.value })}
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Goal
      </button>
    </form>
  );
}

export default GoalForm;