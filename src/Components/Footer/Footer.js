import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footer'>
			<span className='footer__headerLogoContainer'>
				<img
					src={require('../../assets/loona-logo.png')}
					alt='loona'
					className='footer__headerLogo'
					onClick={() =>
						window.scrollTo({
							top: 0,
							behavior: 'smooth',
						})
					}
				/>
			</span>

			<h3 className='footer__header'>Here are my socials!</h3>
			<a href='https://www.facebook.com/loonatelier'>
				<svg
					className='footer__logo'
					viewBox='0 0 50 50'>
					<g
						fill='none'
						fillRule='evenodd'
						id='Page-1'
						stroke='none'
						strokeWidth='1'>
						<g
							fill='#000000'
							id='Facebook'>
							<path
								d='M25,50 C38.8071194,50 50,38.8071194 50,25 C50,11.1928806 38.8071194,0 25,0 C11.1928806,0 0,11.1928806 0,25 C0,38.8071194 11.1928806,50 25,50 Z M25,47 C37.1502651,47 47,37.1502651 47,25 C47,12.8497349 37.1502651,3 25,3 C12.8497349,3 3,12.8497349 3,25 C3,37.1502651 12.8497349,47 25,47 Z M26.8145197,36 L26.8145197,24.998712 L30.0687449,24.998712 L30.5,21.2076072 L26.8145197,21.2076072 L26.8200486,19.3101227 C26.8200486,18.3213442 26.9207209,17.7915341 28.4425538,17.7915341 L30.4769629,17.7915341 L30.4769629,14 L27.2222769,14 C23.3128757,14 21.9368678,15.8390937 21.9368678,18.9318709 L21.9368678,21.2080366 L19.5,21.2080366 L19.5,24.9991413 L21.9368678,24.9991413 L21.9368678,36 L26.8145197,36 Z M26.8145197,36'
								id='Oval-1'
							/>
						</g>
					</g>
				</svg>
			</a>
			<a href='https://www.tiktok.com/@loona.creates'>
				<svg
					data-name='Layer 1'
					id='Layer_1'
					viewBox='0 0 512 512'
					className='footer__logo'>
					<title />
					<path d='M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM385.62,232.382c-27.184,0-53.634-8.822-74-23.75l-.162,101.5a92.457,92.457,0,1,1-80.178-91.721v49.845a43.657,43.657,0,1,0,31.288,41.876V109.333h51.275a71.773,71.773,0,0,0,71.774,71.773Z' />
				</svg>
			</a>
			<a href='https://www.pinterest.com/loonacreates/'>
				<svg
					height='100%'
					version='1.1'
					viewBox='0 0 512 512'
					width='100%'
					className='footer__logo'>
					<path d='M255.998,0.001c-141.384,0 -255.998,114.617 -255.998,255.998c0,108.456 67.475,201.171 162.707,238.471c-2.24,-20.255 -4.261,-51.405 0.889,-73.518c4.65,-19.978 30.018,-127.248 30.018,-127.248c0,0 -7.659,-15.334 -7.659,-38.008c0,-35.596 20.632,-62.171 46.323,-62.171c21.839,0 32.391,16.399 32.391,36.061c0,21.966 -13.984,54.803 -21.203,85.235c-6.03,25.482 12.779,46.261 37.909,46.261c45.503,0 80.477,-47.976 80.477,-117.229c0,-61.293 -44.045,-104.149 -106.932,-104.149c-72.841,0 -115.597,54.634 -115.597,111.095c0,22.004 8.475,45.596 19.052,58.421c2.09,2.535 2.398,4.758 1.776,7.343c-1.945,8.087 -6.262,25.474 -7.111,29.032c-1.117,4.686 -3.711,5.681 -8.561,3.424c-31.974,-14.884 -51.963,-61.627 -51.963,-99.174c0,-80.755 58.672,-154.915 169.148,-154.915c88.806,0 157.821,63.279 157.821,147.85c0,88.229 -55.629,159.232 -132.842,159.232c-25.94,0 -50.328,-13.476 -58.674,-29.394c0,0 -12.838,48.878 -15.95,60.856c-5.782,22.237 -21.382,50.109 -31.818,67.11c23.955,7.417 49.409,11.416 75.797,11.416c141.389,0 256.003,-114.612 256.003,-256.001c0,-141.381 -114.614,-255.998 -256.003,-255.998Z' />
				</svg>
			</a>
			<a href='https://www.instagram.com/loona.creates/'>
				<svg
					className='footer__logo'
					viewBox='0 0 55 55'>
					<g>
						<path
							d='M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
						c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z'
						/>
						<circle
							cx='41.5'
							cy='16.4'
							r='2.9'
						/>
						<path
							d='M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
						h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
						s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
						c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z'
						/>
					</g>
				</svg>
			</a>
		</div>
	);
};

export default Footer;
