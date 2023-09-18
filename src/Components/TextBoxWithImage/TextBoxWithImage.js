/**
 *
 * @param {string} text
 * @param {string} imgPath
 * @param {string} imgPosition ('top','right','bottom','left')
 * @returns
 */

const TextBoxWithImage = ({ text, imgPath, imgPosition = 'top' }) => {
	return (
		<div className={`textBoxWithImage textBoxWithImage-${imgPosition}`}>
			<img
				src={imgPath}
				className={`textBoxWithImage__image`}
			/>
			<div className='textBoxWithImage__headerContainer'>
				<h2 className='textBoxWithImage__header'>{text}</h2>
			</div>
		</div>
	);
};

export default TextBoxWithImage;
