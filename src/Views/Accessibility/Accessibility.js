import Form from '../../Components/Form/Form';
import HeaderBox from '../../Components/HeaderBox/HeaderBox';

const Accessibility = () => {
	return (
		<div className='accessibility'>
			<HeaderBox header={'Accessibility'} />
			<p className='accessibility__paragraph'>
				Hi! Please feel free to send me a message if you have any accessibility
				concerns. I am more than happy to accommodate the people who need it.
			</p>
			<p className='accessibility__paragraph'>
				Please let me know if you have difficulty following patterns because of
				the language, color, contrast, if you need more pictures, or anything
				else.
			</p>
			<p className='accessibility__paragraph'>
				Use this contact form to send me a message or email me directly at
				&nbsp;
				<a href=''>contact@loona.design</a>
			</p>
			<Form />
		</div>
	);
};
// TODO: add href to email link
export default Accessibility;
