import './App.scss';
import { Container } from './components/Container/Container';
import { Grid } from './components/Grid/Grid';
import { GridElement } from './components/GridElement/GreidElement';
import { InfoBlock } from './components/InfoBlock/InfoBlock';

function App() {
	const arr = Array(256).fill('1');
	return (
		<div className="App">
			<Container>
				<InfoBlock />
				<Grid>
					{arr.map((_) => (
						<GridElement />
					))}
				</Grid>
			</Container>
		</div>
	);
}

export default App;
