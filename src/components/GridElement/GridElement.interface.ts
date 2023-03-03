export interface IGridElementProps {
	id: string;
	clazz: string;
	count: string;
	checked: boolean;
	flag: string;
	onClick(id: string): void;
}
