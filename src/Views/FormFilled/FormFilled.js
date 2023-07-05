import { Link } from 'react-router-dom';

const FormFilled = () => {
	return (
		<div>
			<h2>Thanks for filling the form!</h2>
			<Link
				className='navbar__option'
				to='/'>
				Back Home
			</Link>
		</div>
	);
};

export default FormFilled;
