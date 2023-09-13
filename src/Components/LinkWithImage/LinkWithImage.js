const LinkWithImage = ({ imgPath, text, link }) => {
	return (
		<div className='linkWithImage'>
			<img
				src={imgPath}
				className='linkWithImage__image'
			/>
			<a
				href={link}
				className='linkWithImage__link'>
				{text}
			</a>
		</div>
	);
};

export default LinkWithImage;
