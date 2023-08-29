import { Link } from 'react-router-dom';
import HeaderBox from '../../Components/HeaderBox/HeaderBox';
import TextBox from '../../Components/TextBox/TextBox';

const Home = () => {
	return (
		<div className='home'>
			<HeaderBox header={'Home'} />
			<div className='home__introContainer'>
				<TextBox
					string={'Hi!'}
					className='home__textBox'
				/>
				<TextBox
					string={`I'm a 24 year old Puerto Rican crafter, crocheter, illustrator and designer. I'm completely self-taught and I really hope you get a kick out of my designs and my creations.`}
					className='home__textBox'
				/>
				<TextBox
					string={'Picture goes here'}
					className='home__introImage'
				/>
			</div>
			<Link
				to='/accessibility'
				style={{ textDecoration: 'none', display: 'block' }}>
				<span>
					<div className='home__accessibilityBorders'>
						<div className='home__accessibilityContainer'>
							<h2>Accessibility Concerns</h2>
						</div>
					</div>
				</span>
			</Link>
		</div>
	);
};

export default Home;
