import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {
	return (
		<div className='navbar__container'>
			<div className='navbar'>
				<Link
					className='navbar__option'
					to='/'>
					Home
				</Link>
				<Dropdown
					header={
						<Link
							className='navbar__option'
							to='/creations'>
							Creations
						</Link>
					}
					options={[
						<Link
							className='navbar__option'
							to='/creations/crochet'>
							Crochet
						</Link>,
						<Link
							className='navbar__option'
							to='/creations/art'>
							Art
						</Link>,
						<Link
							className='navbar__option'
							to='/creations/jewellry'>
							Jewellry
						</Link>,
					]}
				/>
				<Link
					className='navbar__option'
					to='/comissions'>
					Comission
				</Link>
				<Dropdown
					header={
						<Link
							className='navbar__option'
							to='/patterns'>
							Crochet Patterns
						</Link>
					}
					options={[
						<Link
							className='navbar__option'
							to='/patterns/free-patterns'>
							Free Patterns
						</Link>,
						<Link
							className='navbar__option'
							to='/patterns/premium-patterns'>
							Premium Patterns
						</Link>,
					]}
				/>
				<Link
					className='navbar__option'
					to='/contact'>
					Contact
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
