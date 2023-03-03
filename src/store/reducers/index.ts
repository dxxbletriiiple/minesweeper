import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import grid from '../../utils';

const initialState = {
	grid,
	isStarted: false,
	face: '',
	flagsCount: 40,
};

const counterSlice = createSlice({
	name: 'grid',
	initialState,
	reducers: {
		// ! TODO need to fix on context menu
		onClickStart: (state) => {
			state.face = 'scared';
		},
		onClickEnd: (state, action: PayloadAction<string>) => {
			state.face = 'scared';
			state.isStarted = true;
			state.grid = state.grid.map((el) => {
				if (el.id == action.payload) return { ...el, checked: true };
				return el;
			});
			state.face = '';
		},
		onContextMenu: (state, action: PayloadAction<string>) => {
			state.isStarted = true;
			if (state.flagsCount > 0) {
				state.grid = state.grid = state.grid.map((el) => {
					if (el.id == action.payload) {
						if (el.flag == '') {
							return { ...el, flag: 'flag' };
						}
						if (el.flag == 'flag') return { ...el, flag: 'question' };
						if (el.flag == 'question') return { ...el, flag: '' };
					}
					return el;
				});
				const flags = state.grid.filter((el) => el.flag == 'flag').length;
				state.flagsCount = 40 - flags;
			}
		},
		onRestart: (state, action: PayloadAction<string>) => {
			state.face = '';
		},
	},
});

export const { onClickStart, onClickEnd, onContextMenu } = counterSlice.actions;
export default counterSlice.reducer;
