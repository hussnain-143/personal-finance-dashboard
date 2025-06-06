
import { createSlice } from '@reduxjs/toolkit';

const budgetSlice = createSlice({
  name: 'budgets',
  initialState: {
    budgets: [],
  },
  reducers: {
    addBudget: (state, action) => {
      state.budgets.push(action.payload);
    },
  },
});

export const { addBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
