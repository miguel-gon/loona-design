import HeaderBox from '../../Components/HeaderBox/HeaderBox';

const CottonOrAcrylic = () => {
	return (
		<div className='cottonOrAcrylic'>
			<HeaderBox header={'Cotton or Acrylic'} />
			<p className='cottonOrAcrylic__paragraph'>
				You’re not limited to picking any of these two materials! I’m more than
				happy to work with whatever material works for you.
			</p>
			<HeaderBox header={'Cotton (img pending)'} />
			<h2 className='cottonOrAcrylic__h2'>Pros</h2>
			<ul className='cottonOrAcrylic__list'>
				<li className='cottonOrAcrylic__listElement'>Durable</li>
				<li className='cottonOrAcrylic__listElement'>Softens with time</li>
				<li className='cottonOrAcrylic__listElement'>
					It's more sustainable since its biodegradable
				</li>
			</ul>
			<h2 className='cottonOrAcrylic__h2'>Cons</h2>
			<ul className='cottonOrAcrylic__list'>
				<li className='cottonOrAcrylic__listElement'>
					Colors will not be as bright as the saturation achieved by synthetic
					fibres.
				</li>
				<li className='cottonOrAcrylic__listElement'>Easily stained</li>
				<li className='cottonOrAcrylic__listElement'>Colors fade over time</li>
			</ul>
			<h3 className='cottonOrAcrylic__h3'>Now onto acrylic!</h3>
			<HeaderBox header={'Acrylic (img pending)'} />
			<h2 className='cottonOrAcrylic__h2'>Pros</h2>
			<ul className='cottonOrAcrylic__list'>
				<li className='cottonOrAcrylic__listElement'>Durable</li>
				<li className='cottonOrAcrylic__listElement'>Easy to wash</li>
				<li className='cottonOrAcrylic__listElement'>
					Holds up better over time
				</li>
				<li className='cottonOrAcrylic__listElement'>Affordable</li>
				<li className='cottonOrAcrylic__listElement'>
					Great for beginner crocheters since it has a low cost
				</li>
			</ul>
			<h2 className='cottonOrAcrylic__h2'>Cons</h2>
			<ul className='cottonOrAcrylic__list'>
				<li className='cottonOrAcrylic__listElement'>
					Holds more water than natural fibres which may make it less suitable
					for rainy weather.
				</li>
				<li className='cottonOrAcrylic__listElement'>
					Not suitable for projects exposed to extreme heat like a teapot
					holder.
				</li>
				<li className='cottonOrAcrylic__listElement'>
					May cause sensory distaste to those with sensory issues
				</li>
			</ul>
		</div>
	);
};

export default CottonOrAcrylic;
