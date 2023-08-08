import { Link } from 'react-router-dom';
import HeaderBox from '../../Components/HeaderBox/HeaderBox';

const Home = () => {
	return (
		<div className='home'>
			<HeaderBox header={'Home'} />
			<Link
				className='home__accessibilityLink'
				to='/accessibility'>
				Accessibility
			</Link>
		</div>
	);
};

export default Home;
