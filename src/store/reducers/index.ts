import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import grid from '../../utils';

const initialState = {
	grid,
	isStarted: false,
	face: '',
};

const counterSlice = createSlice({
	name: 'onClick',
	initialState,
	reducers: {
		onClickStart: (state) => {
			state.face = 'scared';
		},
		onClickEnd: (state, action: PayloadAction<string>) => {
			state.isStarted = true;
			state.face = '';
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
		onRestart: (state, action: PayloadAction<string>) => {
			state.face = '';
		},
	},
});

export const { onClickStart, onClickEnd, onContextMenu } = counterSlice.actions;
export default counterSlice.reducer;
