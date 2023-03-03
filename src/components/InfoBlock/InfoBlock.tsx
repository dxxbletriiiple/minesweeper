import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import cn from 'classnames';
import styles from './InfoBlock.module.scss';

export const InfoBlock = (): JSX.Element => {
	const face = useSelector((state: RootState) => state.grid.face);
	const flagsCount = useSelector((state: RootState) => state.grid.flagsCount);
	return (
		<div className={styles['info-block']}>
			<div className={styles.flags} datatype={flagsCount.toString()}>
				<div></div>
				<div datatype={Math.floor(flagsCount / 10).toString()}></div>
				<div datatype={(flagsCount % 10).toString()}></div>
			</div>
			<div
				className={cn(styles.face, {
					[styles.restart]: face == 'restart',
					[styles.scared]: face == 'scared',
					[styles.win]: face == 'win',
					[styles.end]: face == 'end',
				})}
			></div>
			<div className={styles.seconds}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
