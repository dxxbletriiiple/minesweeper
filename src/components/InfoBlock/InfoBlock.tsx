import styles from './InfoBlock.module.scss';
import cn from 'classnames';
export const InfoBlock = (): JSX.Element => {
	return (
		<div className={styles['info-block']}>
			<div className={styles.minutes}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div
				className={cn(styles.face, {
					[styles.restart]: false,
					[styles.scared]: false,
					[styles.win]: false,
					[styles.end]: false,
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
