import { useSelector, useDispatch } from 'react-redux';
import { Container } from './components/Container/Container';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { Grid } from './components/Grid/Grid';
import { GridElement } from './components/GridElement/GridElement';
import { IGridElementProps } from './components/GridElement/GridElement.interface';
import { RootState } from './store/store';
import './App.scss';
import { useEffect, useState } from 'react';

function App() {
	const grid = useSelector((state: RootState) => state.grid.grid);

	return (
		<div className="App">
			<Container>
				<InfoBlock />
				<Grid>
					{grid.map((el: IGridElementProps) => (
						<GridElement {...el} key={el.id} />
					))}
				</Grid>
			</Container>
		</div>
	);
}

export default App;
