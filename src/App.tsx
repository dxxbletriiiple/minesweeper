import './App.scss';
import { Container } from './components/Container/Container';
import { InfoBlock } from './components/InfoBlock/InfoBlock';

function App() {
	return (
		<div className="App">
			<Container>
				<InfoBlock />
			</Container>
		</div>
	);
}

export default App;
