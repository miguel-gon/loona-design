import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {
	return (
		<div className='navbar__container'>
			<div className='navbar'>
				<p>Home</p>
				<Dropdown
					header='Creations'
					options={['Crochet', 'Art', 'Jewelry']}
				/>
				<p>Comissions</p>
				<Dropdown
					header='Crochet Patterns'
					options={['Free Patterns', 'Premium Patterns']}
				/>
				<p>Contact</p>
			</div>
		</div>
	);
};

export default Navbar;
