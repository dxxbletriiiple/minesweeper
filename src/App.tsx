import { useState } from 'react';
import { v4 } from 'uuid';
import { Container } from './components/Container/Container';
import { Grid } from './components/Grid/Grid';
import { GridElement } from './components/GridElement/GridElement';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import squares from './utils';
import './App.scss';
import { IGridElementProps } from './components/GridElement/GridElement.interface';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Container>
					<InfoBlock />
					<Grid />
				</Container>
			</Provider>
		</div>
	);
}

export default App;
