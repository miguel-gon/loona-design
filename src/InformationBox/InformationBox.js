const InformationBox = ({ header, content }) => {
	return (
		<div className='informationBox'>
			<h2 className='informationBox__header'>{header}</h2>
			<div className='informationBox__separator'></div>
			<p className='informationBox__content'>{content}</p>
		</div>
	);
};

export default InformationBox;
