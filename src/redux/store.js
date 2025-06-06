
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import transactionSlice from './slices/transactionSlice';
import budgetSlice from './slices/budgetSlice';
import goalSlice from './slices/goalSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
};

const store = configureStore({
  reducer: {
    auth: authSlice,
    transactions: transactionSlice,
    budgets: budgetSlice,
    goals: goalSlice,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
