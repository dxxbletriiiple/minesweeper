import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bombClick, contextClick, getGrid, validClick } from '../../utils';
import { ClickType, IState } from './reducer.interface';

const initialState: IState = {
	grid: getGrid(),
	isStarted: false,
	face: '',
	flagsCount: 40,
	isOver: false,
};

const gridSlice = createSlice({
	name: 'grid',
	initialState,
	reducers: {
		onClickStart: (state) => {
			state.face = 'scared';
		},
		onClickEnd: (state, action: PayloadAction<ClickType>) => {
			if (action.payload.clazz == 'bomb' && !state.isOver) {
				state.isOver = true;
				state.isStarted = false;
				state.grid = bombClick(state.grid, action.payload.id);
			}
			if (!state.isOver) {
				state.face = 'scared';
				state.isStarted = true;
				state.grid = validClick(state.grid, action.payload.id);
				state.face = '';
			}
			const over = state.grid.filter((el) => el.checked).length;
			if (over == 216) {
				state.isOver = true;
				state.face = 'win';
				state.isStarted = false;
			}
		},
		onContextMenu: (state, action: PayloadAction<string>) => {
			if (!state.isOver) {
				state.face = '';
				state.isStarted = true;
				if (state.flagsCount > 0) {
					state.grid = contextClick(state.grid, action.payload);
					const flags = state.grid.filter((el) => el.flag == 'flag').length;
					state.flagsCount = 40 - flags;
				}
			}
		},
		onRestart: (state) => {
			state.face = '';
			state.flagsCount = 40;
			state.isStarted = false;
			state.isOver = false;
			location.reload();
		},
	},
});

export const { onClickStart, onClickEnd, onContextMenu, onRestart } = gridSlice.actions;
export default gridSlice.reducer;
