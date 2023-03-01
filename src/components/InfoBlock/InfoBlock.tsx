import styles from './InfoBlock.module.scss';

export const InfoBlock = (): JSX.Element => {
	return (
		<div className={styles['info-block']}>
			<div className={styles.minutes}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className={styles.face}></div>
			<div className={styles.seconds}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
