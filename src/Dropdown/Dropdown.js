const Dropdown = ({ header, options }) => {
	return (
		<div className='dropdown'>
			<p className='dropdown__header'>{header}</p>
			<div className='dropdown__optionsArea'>
				{options.map((option) => (
					<p className='dropdown__option'>{option}</p>
				))}
			</div>
		</div>
	);
};

export default Dropdown;
