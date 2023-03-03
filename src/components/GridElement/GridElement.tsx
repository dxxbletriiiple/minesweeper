import cn from 'classnames';
import { IGridElementProps } from './GridElement.interface';
import styles from './GridElement.module.scss';

export const GridElement = ({ id, clazz, count, checked, flag, onClick, onContextMenu }: IGridElementProps): JSX.Element => {
	return (
		<div
			className={cn(styles['grid-element'], styles[clazz], {
				[styles.checked]: checked,
				[styles.flag]: flag == 'flag',
				[styles.question]: flag == 'question',
			})}
			datatype={count}
			onClick={() => onClick(id)}
			onContextMenu={(e: React.MouseEvent) => onContextMenu(e, id)}
		></div>
	);
};
