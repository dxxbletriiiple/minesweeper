import { IGridElementProps } from '../components/GridElement/GridElement.interface';
import { v4 } from 'uuid';

const _WIDTH = 16;
const _BOMBSCOUNT = 40;

export function getGrid(): IGridElementProps[] {
	const shuffledGrid = [
		...Array(_BOMBSCOUNT).fill({ id: '', clazz: 'bomb', count: '', checked: false, flag: '', clicked: false }),
		...Array(_WIDTH ** 2 - _BOMBSCOUNT).fill({ id: '', clazz: 'valid', count: '', checked: false, flag: '' }),
	].sort(() => Math.random() - 0.5);
	const grid: IGridElementProps[] = [];
	for (let i = 0; i < shuffledGrid.length; i++) {
		let total = 0;
		const leftEdge = i % _WIDTH === 0;
		const rightEdge = i % _WIDTH === _WIDTH - 1;
		shuffledGrid[i].id = i;
		if (shuffledGrid[i].clazz == 'valid') {
			if (i > 0 && !leftEdge && shuffledGrid[i - 1].clazz == 'bomb') total++;
			if (i > 15 && !rightEdge && shuffledGrid[i + 1 - _WIDTH].clazz == 'bomb') total++;
			if (i > 16 && shuffledGrid[i - _WIDTH].clazz == 'bomb') total++;
			if (i > 17 && !leftEdge && shuffledGrid[i - 1 - _WIDTH].clazz == 'bomb') total++;
			if (i < 255 && !rightEdge && shuffledGrid[i + 1].clazz == 'bomb') total++;
			if (i < 240 && !leftEdge && shuffledGrid[i - 1 + _WIDTH].clazz == 'bomb') total++;
			if (i < 238 && !rightEdge && shuffledGrid[i + 1 + _WIDTH].clazz == 'bomb') total++;
			if (i < 239 && shuffledGrid[i + _WIDTH].clazz == 'bomb') total++;
			grid.push({ ...shuffledGrid[i], count: total.toString() });
			continue;
		}
		grid.push({ ...shuffledGrid[i] });
	}
	return grid;
}

export function contextClick(grid: IGridElementProps[], id: string): IGridElementProps[] {
	const newArr = grid.map((el) => {
		if (el.id == id) {
			if (el.flag == '') {
				return { ...el, flag: 'flag' };
			}
			if (el.flag == 'flag') return { ...el, flag: 'question' };
			if (el.flag == 'question') return { ...el, flag: '' };
		}
		return el;
	});
	return newArr;
}

export function bombClick(grid: IGridElementProps[], id: string): IGridElementProps[] {
	const newArr = grid.map((el) => {
		if (!el.flag) {
			if (el.clazz === 'bomb') {
				if (id === el.id) return { ...el, checked: true, clicked: true };
				return { ...el, checked: true };
			}
			return el;
		}
		return el;
	});
	return newArr;
}

export function validClick(grid: IGridElementProps[], id: string): IGridElementProps[] {
	const newArr = grid.map((el) => (el.id == id && !el.flag ? { ...el, checked: true } : el));
	return newArr;
}
