import { v4 } from 'uuid';

interface IshuffledGrid {
	id: string;
	clazz: string;
	count: string;
}

const _WIDTH = 16;
const _BOMBSCOUNT = 40;

const shuffledGrid: IshuffledGrid[] = [
	...Array(_BOMBSCOUNT).fill({ id: v4(), clazz: 'bomb', count: '' }),
	...Array(_WIDTH ** 2 - _BOMBSCOUNT).fill({ id: v4(), clazz: 'valid', count: '' }),
].sort(() => Math.random() - 0.5);

const grid: IshuffledGrid[] = [];

for (let i = 0; i < shuffledGrid.length; i++) {
	let total = 0;
	const leftEdge = i % _WIDTH === 0;
	const rightEdge = i % _WIDTH === _WIDTH - 1;
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

export default grid;
