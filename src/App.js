import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Views/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Creations from './Views/Creations/Creations';
import CrochetCreations from './Views/CrochetCreations/CrochetCreations';
import ArtCreations from './Views/ArtCreations/ArtCreations';
import JewelryCreations from './Views/JewelryCreations/JewelryCreations';
import Commissions from './Views/Commissions/Commissions';
import Patterns from './Views/Patterns/Patterns';
import FreePatterns from './Views/FreePatterns/FreePatterns';
import Contact from './Views/Contact/Contact';
import PremiumPatterns from './Views/PremiumPatterns/PremiumPatterns';
import FormFilled from './Views/FormFilled/FormFilled';
import Accessibility from './Views/Accessibility/Accessibility';

function App() {
	return (
		<Router>
			<div className='App'>
				<img src='../src/Assets/loona-logo.png' />
				<Navbar />
				<div className='mainContent'>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/creations'
							element={<Creations />}
						/>
						<Route
							path='/creations/crochet'
							element={<CrochetCreations />}
						/>
						<Route
							path='/creations/art'
							element={<ArtCreations />}
						/>
						<Route
							path='/creations/jewelry'
							element={<JewelryCreations />}
						/>
						<Route
							path='/commissions'
							element={<Commissions />}
						/>
						<Route
							path='/patterns'
							element={<Patterns />}
						/>
						<Route
							path='/patterns/free-patterns'
							element={<FreePatterns />}
						/>
						<Route
							path='/patterns/premium-patterns'
							element={<PremiumPatterns />}
						/>
						<Route
							path='/contact'
							element={<Contact />}
						/>
						<Route
							path='/formfilled'
							element={<FormFilled />}
						/>
						<Route
							path='/accessibility'
							element={<Accessibility />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
