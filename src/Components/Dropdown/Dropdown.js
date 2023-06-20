const Dropdown = ({ header, options }) => {
	return (
		<div className='dropdown'>
			{header}
			<div className='dropdown__optionsArea'>{options}</div>
		</div>
	);
};

export default Dropdown;
