import { useSelector, useDispatch } from 'react-redux';
import { Container } from './components/Container/Container';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { Grid } from './components/Grid/Grid';
import { GridElement } from './components/GridElement/GridElement';
import { IGridElementProps } from './components/GridElement/GridElement.interface';
import { RootState } from './store/store';
import { onClick, onContextMenu } from './store/reducers';
import './App.scss';

function App() {
	const grid = useSelector((state: RootState) => state.grid.grid);
	const dispatch = useDispatch();

	const handleClick = (id: string) => {
		dispatch(onClick(id));
	};
	const handleContextMenu = (e: React.MouseEvent, id: string) => {
		e.preventDefault();
		dispatch(onContextMenu(id));
	};

	return (
		<div className="App">
			<Container>
				<InfoBlock />
				<Grid>
					{grid.map((el: IGridElementProps) => (
						<GridElement {...el} key={el.id} onClick={handleClick} onContextMenu={handleContextMenu} />
					))}
				</Grid>
			</Container>
		</div>
	);
}

export default App;
