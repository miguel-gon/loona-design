import HeaderBox from '../../Components/HeaderBox/HeaderBox';
import TextBoxWithImage from '../../Components/TextBoxWithImage/TextBoxWithImage';

const Creations = () => {
	return (
		<div className='creations'>
			<HeaderBox header={'Portfolio'} />
			<p className='creations__introParagraph'>
				Click below to find my crochet creations, digital art, and the
				jewellery-making I dabble in.
			</p>
			<TextBoxWithImage
				text={'Crochet'}
				imgPosition='left'
			/>
			<TextBoxWithImage
				text={'Art'}
				imgPosition='right'
			/>
			<TextBoxWithImage
				text={'Jewellry'}
				imgPosition='left'
			/>
		</div>
	);
};

export default Creations;
