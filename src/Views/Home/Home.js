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
					string={`I'm a 25 year old Puerto Rican crafter, crocheter, illustrator and designer. I'm completely self-taught and I really hope you get a kick out of my designs and my creations.`}
					className='home__textBox'
				/>
				<img
					src={require('../../assets/HomeBioPic.webp')}
					alt=''
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
			<div className='home__imageCollage-top'>
				<img
					src={require('../../assets/CollagePic1.webp')}
					alt=''
					className='home__topCollumn1Img home__collageImg'
				/>
				<img
					src={require('../../assets/CollagePic2.webp')}
					alt=''
					className='home__topCollumn1Img home__collageImg'
				/>
				<img
					src={require('../../assets/CollagePic3.webp')}
					alt=''
					className='home__topCollumn1Img home__collageImg'
				/>
				<img
					src={require('../../assets/CollagePic4.webp')}
					alt=''
					className='home__topCollumn2Img home__collageImg'
				/>
			</div>
			<div className='home__imageCollage-bottom'>
				<img
					src={require('../../assets/CollagePic5.webp')}
					alt=''
					className='home__bottomImgSmall home__collageImg'
				/>
				<img
					src={require('../../assets/CollagePic6.webp')}
					alt=''
					className='home__bottomImgSmall home__collageImg'
				/>
				<img
					src={require('../../assets/CollagePic7.webp')}
					alt=''
					className='home__bottomImgBig home__collageImg'
				/>
			</div>
		</div>
	);
};

export default Home;
