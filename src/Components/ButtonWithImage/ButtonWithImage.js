import { Link } from 'react-router-dom';

const ButtonWithImage = ({ imgPath, btnString, route }) => {
	return (
		<div
			className='buttonWithImage'
			style={{ backgroundImage: `url(${imgPath})` }}>
			<Link
				to={route}
				style={{
					display: 'flex',
					justifyContent: 'center',
					textDecoration: 'none',
				}}>
				<span>
					<div className='buttonWithImage__linkContainer'>
						<p className='buttonWithImage__linkString'> {btnString}</p>
					</div>
				</span>
			</Link>
		</div>
	);
};

export default ButtonWithImage;
