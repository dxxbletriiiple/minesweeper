import { IGridElementProps } from '../../components/GridElement/GridElement.interface';

export interface IState {
	grid: IGridElementProps[];
	isStarted: boolean;
	isOver: boolean;
	face: string;
	flagsCount: number;
}
export type ClickType = {
	id: string;
	clazz?: string;
};
