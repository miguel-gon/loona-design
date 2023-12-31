import HeaderBox from '../../Components/HeaderBox/HeaderBox';
import LinkWithImage from '../../Components/LinkWithImage/LinkWithImage';

const PremiumPatterns = () => {
	return (
		<div className='premiumPatterns'>
			<HeaderBox header={'Premium Patterns'} />
			<LinkWithImage
				imgPath={require('../../assets/TulipFieldsTop.webp')}
				link={'https://ko-fi.com/s/190453e54c'}
				text={'🌷TulipFieldsTop🌷'}
			/>
		</div>
	);
};

export default PremiumPatterns;
