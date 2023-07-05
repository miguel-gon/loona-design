import { useState } from 'react';

const ComissionForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	return (
		<form
			action='/formfilled'
			className='comissionForm'>
			<label
				htmlFor='name'
				className='comissionForm__label'>
				Name (required)
			</label>
			<input
				type='text'
				required
				name='name'
				id='name'
				className='comissionForm__input'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label
				htmlFor='email'
				className='comissionForm__label'>
				Email (required)
			</label>
			<input
				type='text'
				required
				name='email'
				id='email'
				className='comissionForm__input'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label
				htmlFor='message'
				className='comissionForm__label'>
				Message
			</label>
			<textarea
				name='message'
				id='message'
				className='comissionForm__textArea'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<input
				className='comissionForm__submit'
				type='submit'
				value='Whoosh!'
			/>
		</form>
	);
};

export default ComissionForm;
