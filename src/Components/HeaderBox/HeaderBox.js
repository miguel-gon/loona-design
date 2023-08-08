const HeaderBox = ({ header }) => {
	return (
		<div className='headerBox'>
			<div className='headerBox__headerContainer'>
				<h2>{header}</h2>
			</div>
			<div className='headerBox__divider'></div>
		</div>
	);
};

export default HeaderBox;
