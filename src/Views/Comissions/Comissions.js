import ComissionForm from '../../Components/ComissionForm/ComissionForm';
import HeaderBox from '../../Components/HeaderBox/HeaderBox';

const Comissions = () => {
	return (
		<div className='comissions'>
			<HeaderBox header={'Commissions'} />
			<ComissionForm />
		</div>
	);
};

export default Comissions;
