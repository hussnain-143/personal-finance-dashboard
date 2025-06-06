
import { createSlice } from '@reduxjs/toolkit';

const goalSlice = createSlice({
  name: 'goals',
  initialState: {
    goals: [],
  },
  reducers: {
    addGoal: (state, action) => {
      state.goals.push(action.payload);
    },
  },
});

export const { addGoal } = goalSlice.actions;
export default goalSlice.reducer;
