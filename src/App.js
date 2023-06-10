import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';

function App() {
	return (
		<Router>
			<div className='App'>
				<Home />
			</div>
		</Router>
	);
}

export default App;
