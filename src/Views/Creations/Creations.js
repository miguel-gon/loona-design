import { Link } from 'react-router-dom';
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
			<Link
				to='/creations/crochet'
				className='creations__link'
				style={{ textDecoration: 'none' }}>
				<TextBoxWithImage
					text={'Crochet'}
					imgPath={require('../../assets/CrochetCreationImg.webp')}
					imgPosition='left'
				/>
			</Link>
			<Link
				to='/creations/art'
				className='creations__link'
				style={{ textDecoration: 'none' }}>
				<TextBoxWithImage
					text={'Art'}
					imgPath={require('../../assets/ArtCreationsImg.webp')}
					imgPosition='right'
				/>
			</Link>
			<Link
				to='/creations/jewelry'
				className='creations__link'
				style={{ textDecoration: 'none' }}>
				<TextBoxWithImage
					text={'Jewellry'}
					imgPath={require('../../assets/JewerlyCreations.webp')}
					imgPosition='left'
				/>
			</Link>
		</div>
	);
};

export default Creations;
