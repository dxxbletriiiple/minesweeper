import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getGrid } from '../../utils';

type ClickType = {
	id: string;
	clazz?: string;
};
const initialState = {
	grid: getGrid(),
	isStarted: false,
	face: '',
	flagsCount: 40,
	isOver: false,
};

const counterSlice = createSlice({
	name: 'grid',
	initialState,
	reducers: {
		onClickStart: (state) => {
			state.face = 'scared';
		},
		onClickEnd: (state, action: PayloadAction<ClickType>) => {
			if (action.payload.clazz == 'bomb') {
				state.isOver = true;
				state.isStarted = false;
				state.grid = state.grid.map((el) => {
					if (!el.flag) {
						if (el.clazz === 'bomb') {
							if (action.payload.id === el.id) return { ...el, checked: true, clicked: true };
							return { ...el, checked: true };
						}
						return el;
					}
					return el;
				});
			}
			if (!state.isOver) {
				state.face = 'scared';
				state.isStarted = true;
				state.grid = state.grid.map((el) => {
					if (el.id == action.payload.id && !el.flag) {
						return { ...el, checked: true };
					}
					return el;
				});
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

export const { onClickStart, onClickEnd, onContextMenu, onRestart } = counterSlice.actions;
export default counterSlice.reducer;
