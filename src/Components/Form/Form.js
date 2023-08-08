import { useState } from 'react';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	return (
		<form
			action='/formfilled'
			className='Form'>
			<label
				htmlFor='name'
				className='Form__label'>
				Name
			</label>
			<input
				type='text'
				required
				name='name'
				id='name'
				className='Form__input'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label
				htmlFor='email'
				className='Form__label'>
				Email
			</label>
			<input
				type='text'
				required
				name='email'
				id='email'
				className='Form__input'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label
				htmlFor='message'
				className='Form__label'>
				Message
			</label>
			<textarea
				name='message'
				required
				id='message'
				className='Form__textArea'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<input
				className='Form__submit'
				type='submit'
				value='Whoosh!'
			/>
		</form>
	);
};

export default Form;
