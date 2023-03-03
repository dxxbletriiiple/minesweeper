import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import cn from 'classnames';
import styles from './InfoBlock.module.scss';

export const InfoBlock = (): JSX.Element => {
	const face = useSelector((state: RootState) => state.grid.face);

	return (
		<div className={styles['info-block']}>
			<div className={styles.minutes}>
				<div></div>
				<div></div>
				<div></div>
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
