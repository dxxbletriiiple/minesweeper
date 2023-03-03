import { IGridProps } from './Grid.interface';
import styles from './Grid.module.scss';

export const Grid = ({ children }: IGridProps): JSX.Element => {
	return <div className={styles.grid}>{children}</div>;
};
