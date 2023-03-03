import { useDispatch } from 'react-redux';
import { IGridElementProps } from './GridElement.interface';
import { onClickEnd, onClickStart, onContextMenu } from '../../store/reducers';
import cn from 'classnames';
import styles from './GridElement.module.scss';

export const GridElement = ({ id, clazz, count, checked, flag }: IGridElementProps): JSX.Element => {
	const dispatch = useDispatch();

	const handleClick = (id: string) => {
		dispatch(onClickEnd(id));
	};

	const handleContextMenu = (e: React.MouseEvent, id: string) => {
		e.preventDefault();
		dispatch(onContextMenu(id));
	};
	return (
		<div
			className={cn(styles['grid-element'], styles[clazz], {
				[styles.checked]: checked,
				[styles.flag]: flag == 'flag',
				[styles.question]: flag == 'question',
			})}
			datatype={count}
			onClick={() => handleClick(id)}
			// onMouseDown={() => dispatch(onClickStart())}
			onContextMenu={(e: React.MouseEvent) => handleContextMenu(e, id)}
		></div>
	);
};
