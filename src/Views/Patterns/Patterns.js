import ButtonWithImage from '../../Components/ButtonWithImage/ButtonWithImage';
import HeaderBox from '../../Components/HeaderBox/HeaderBox';

const Patterns = () => {
	return (
		<div className='patterns'>
			<HeaderBox header={'Patterns'} />
			<p className='patters__paragraph'>
				Click below to find both free and premium crochet patterns released by
				loona!
			</p>
			<div className='patterns__buttonsContainer'>
				<ButtonWithImage
					imgPath={require('../../assets/FreePatternsBackgroundImg.webp')}
					btnString={'Free Patterns'}
					route={'/patterns/free-patterns'}
				/>
				<ButtonWithImage
					imgPath={require('../../assets/PremiumPatternsBackgroundImg.webp')}
					btnString={'Premium Patterns'}
					route={'/patterns/premium-patterns'}
				/>
			</div>
		</div>
	);
};

export default Patterns;
