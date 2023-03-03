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
		onContextMenu: (state, action: PayloadAction<string>) => {
			state.grid = state.grid = state.grid.map((el) => {
				if (el.id == action.payload) {
					if (el.flag == '') return { ...el, flag: 'flag' };
					if (el.flag == 'flag') return { ...el, flag: 'question' };
					if (el.flag == 'question') return { ...el, flag: '' };
				}
				return el;
			});
		},
	},
});

export const { onClick, onContextMenu } = counterSlice.actions;
export default counterSlice.reducer;
