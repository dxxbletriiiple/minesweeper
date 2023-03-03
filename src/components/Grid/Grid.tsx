import { IGridProps } from './Grid.interface';
import styles from './Grid.module.scss';
//
import { IGridElementProps } from '../GridElement/GridElement.interface';
import squares from '../../utils';
import { useState } from 'react';
import { GridElement } from '../GridElement/GridElement';
//
import { useSelector, useDispatch } from 'react-redux';
import { onClick } from '../../store/reducers';
import { RootState } from '../../store/store';

export const Grid = ({ children }: IGridProps): JSX.Element => {
	const grid = useSelector((state: RootState) => state.grid.grid);
	const dispatch = useDispatch();

	const handleClick = (id: string) => {
		dispatch(onClick(id));
	};
	const onContextMenu = (id: string) => {};

	return (
		<div className={styles.grid}>
			{grid.map((el: IGridElementProps) => (
				<GridElement {...el} key={el.id} onClick={handleClick} />
			))}
		</div>
	);
};
