import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import cn from 'classnames';
import styles from './InfoBlock.module.scss';

export const InfoBlock = (): JSX.Element => {
	const face = useSelector((state: RootState) => state.grid.face);
	const flagsCount = useSelector((state: RootState) => state.grid.flagsCount);
	const isStarted = useSelector((state: RootState) => state.grid.isStarted);
	const [count, setCount] = useState(0);

	useEffect(() => {
		let id: any;
		if (isStarted) {
			id = setInterval(() => {
				setCount((prev) => prev + 1);
			}, 1000);
		}

		return () => {
			clearInterval(id);
		};
	}, [isStarted]);

	return (
		<div className={styles['info-block']}>
			<div className={styles.flags}>
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
				<div datatype={Math.floor(count / 100).toString()}></div>
				<div datatype={Math.floor(count / 10).toString()}></div>
				<div datatype={(count % 10).toString()}></div>
			</div>
		</div>
	);
};
