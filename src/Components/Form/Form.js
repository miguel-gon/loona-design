import { useState } from 'react';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	return (
		<form
			action='/formfilled'
			className='form'>
			<label
				htmlFor='name'
				className='form__label'>
				Name
			</label>
			<input
				type='text'
				required
				name='name'
				id='name'
				className='form__input'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label
				htmlFor='email'
				className='form__label'>
				Email
			</label>
			<input
				type='text'
				required
				name='email'
				id='email'
				className='form__input'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label
				htmlFor='message'
				className='form__label'>
				Message
			</label>
			<textarea
				name='message'
				required
				id='message'
				className='form__textArea'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<input
				className='form__submit'
				type='submit'
				value='Whoosh!'
			/>
		</form>
	);
};

export default Form;
