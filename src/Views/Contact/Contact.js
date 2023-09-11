import Form from '../../Components/Form/Form';
import HeaderBox from '../../Components/HeaderBox/HeaderBox';

const Contact = () => {
	return (
		<div className='contact'>
			<HeaderBox header={'Contact'} />
			<div className='contact__mainContainer'>
				<div className='contact__mainContainer-left'>
					<p className='contact__mainContainerHeading'>Get in touch!</p>
					<p className='contact__mainContainerContent'>
						Please send me a message with your concerns.
					</p>
					<p className='contact__mainContainerContent'>
						Feel free to do so through this form or the e-mail listed below.
					</p>
					<a
						href='mailto:contact@loona.design'
						className='contact__link'>
						contact@loona.design
					</a>
				</div>
				<div className='contact__mainContainer-right'>
					<Form />
				</div>
			</div>
		</div>
	);
};

export default Contact;
