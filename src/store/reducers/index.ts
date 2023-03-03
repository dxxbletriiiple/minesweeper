import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import grid from '../../utils';

const initialState = {
	grid,
};

const counterSlice = createSlice({
	name: 'onClick',
	initialState,
	reducers: {
		onClick: (state, action: PayloadAction<string>) => {
			state.grid = state.grid.map((el) => {
				if (el.id == action.payload) return { ...el, checked: true };
				return el;
			});
		},
	},
});

export const { onClick } = counterSlice.actions;
export default counterSlice.reducer;
