import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import TextBox from './TextBox/TextBox';
import InformationBox from './InformationBox/InformationBox';

function App() {
	return (
		<Router>
			<div className='App'>
				<Home />
				<Navbar />
				<TextBox string='Testing TextBox' />
				<InformationBox
					header={'Testing Header'}
					content={'Testing Content'}
				/>
			</div>
		</Router>
	);
}

export default App;
