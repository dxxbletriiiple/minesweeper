import { Provider, useSelector, useDispatch } from 'react-redux';
import { Container } from './components/Container/Container';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { Grid } from './components/Grid/Grid';
import { GridElement } from './components/GridElement/GridElement';
import { IGridElementProps } from './components/GridElement/GridElement.interface';
import { store, RootState } from './store/store';
import { onClick } from './store/reducers';
import './App.scss';

function App() {
	const grid = useSelector((state: RootState) => state.grid.grid);
	const dispatch = useDispatch();

	const handleClick = (id: string) => {
		dispatch(onClick(id));
	};
	const onContextMenu = (id: string) => {};

	return (
		<div className="App">
			<Container>
				<InfoBlock />
				<Grid>
					{grid.map((el: IGridElementProps) => (
						<GridElement {...el} key={el.id} onClick={handleClick} />
					))}
				</Grid>
			</Container>
		</div>
	);
}

export default App;
