const TextBox = ({ string, className }) => {
	return (
		<div className={`textBox ${className}`}>
			<p className='textBox__content'>{string}</p>
		</div>
	);
};

export default TextBox;
