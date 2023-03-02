import cn from 'classnames';
import { IGridElementProps } from './GridElement.interface';
import styles from './GridElement.module.scss';

export const GridElement = ({ clazz, count, checked, flag }: IGridElementProps): JSX.Element => {
	return (
		<div
			className={cn(styles['grid-element'], styles[clazz], {
				[styles.checked]: checked,
				[styles.flag]: flag == 'flag',
				[styles.question]: flag == 'question',
			})}
			datatype={count}
		></div>
	);
};
