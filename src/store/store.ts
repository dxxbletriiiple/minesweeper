import { configureStore } from '@reduxjs/toolkit';
import grid from './reducers';

export const store = configureStore({
	reducer: {
		grid,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
