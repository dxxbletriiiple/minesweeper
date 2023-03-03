import { configureStore } from '@reduxjs/toolkit';
import onClick from './reducers';

export const store = configureStore({
	reducer: {
		grid: onClick,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/*
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch; */