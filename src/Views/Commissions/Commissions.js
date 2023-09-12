import { Link } from 'react-router-dom';
import Form from '../../Components/Form/Form';
import HeaderBox from '../../Components/HeaderBox/HeaderBox';
import TextBox from '../../Components/TextBox/TextBox';

const Commissions = () => {
	return (
		<div className='commissions'>
			<HeaderBox header={'Commissions'} />
			<h1 className='commissions__headingImage'>
				Create your perfect garment (background image pending)
			</h1>
			<h1>How do commissions work?</h1>
			<TextBox
				string='An overview'
				className='commissions__textBox'
			/>
			<p className='commissions__paragraph'>
				This page will provide you with all the information you need regarding
				commissions. There are detailed sections touching on the many topics.
			</p>
			<p className='commissions__paragraph'>
				First, you need to think about what you want. Is this garment colourful?
				Is it loose fitting? Do you want short sleeves or long sleeves? You can
				absolutely ask me to come up with the entire concept, and I'll get you a
				sketch, but it would be great if you had a general idea.
			</p>{' '}
			<p className='commissions__paragraph'>
				The link below will take you to my crochet portfolio where you can get
				an idea on what I can do. Of course, my skills are not limited to this.
			</p>
			<Link
				to='/creations/crochet'
				style={{ display: 'flex', justifyContent: 'center' }}>
				<span>
					<div className='commissions__linkContainer'>
						<h2 className='commissions__linkHeading'> Get some inspo!</h2>
					</div>
				</span>
			</Link>
			<p className='commissions__paragraph'>What steps should I follow?</p>
			<ol className='commissions__orderedList'>
				<li className='commissions__listElement'>
					Ask yourself: What do I want? What colors do I want? What material?
				</li>
				<li className='commissions__listElement'>
					Send me a message. We'll discuss pricing, concept, and timeline.
				</li>
				<li className='commissions__listElement'>
					I'll send you a concept sketch.
				</li>
				<li className='commissions__listElement'>Pay a deposit.</li>
				<li className='commissions__listElement'>
					Wait for me to activate my spider's prowess.
				</li>
				<li className='commissions__listElement'>Get your item!</li>
			</ol>
			<TextBox
				string='Pricing'
				className='commissions__textBox'
			/>
			<p className='commissions__paragraph'>
				I'm thankful you're interested in a commission! (:
			</p>
			<p className='commissions__paragraph'>
				Here's what the pricing depends on: the amount of time a garment takes
				me to make, the cost of materials and the complexity of the piece. It
				can range from $6 to $200+.
			</p>
			<p className='commissions__paragraph'>
				Payments will be handled through Etsy!
			</p>
			<TextBox
				string='Materials'
				className='commissions__textBox'
			/>
			<p className='commissions__paragraph'>
				Cotton or acrylic? These are the two main fibre types I work with. Of
				course, you may request a specific material that is neither cotton nor
				acrylic.
			</p>
			<p className='commissions__paragraph'>
				The cost of your garment will vary depending on the material you choose.
			</p>
			<p className='commissions__paragraph'>
				If you're unsure about which material you want to pick, we can discuss
				that together. 😊
			</p>
			<p
				className='commissions__paragraph'
				style={{ display: 'inline' }}>
				Take a read about the differences between cotton and acrylic:
			</p>
			<Link
				to='/cotton-or-acrylic'
				style={{
					display: 'inline',
					color: 'black',
					fontStyle: 'italic',
					fontWeight: '900',
				}}>
				Cotton or Acrylic?
			</Link>
			<TextBox
				string='Comission me!'
				className='commissions__textBox'
			/>
			<div className='commissions__formContainer'>
				<Form />
			</div>
		</div>
	);
};

export default Commissions;
