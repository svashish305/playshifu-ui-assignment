import React, { useState, useEffect } from 'react';
import './expanded-content.scss';
import { Carousel, Image, Container, Row, Button } from 'react-bootstrap';
import LandingPageModal from '../LandingPageModal/landing-page-modal';

export default function ExpandedContent(props) {
	const [modalShow, setModalShow] = useState(false);

	const [sectionName, setSectionName] = useState('');

	useEffect(
		() => {
			switch (props.eventKey) {
				case '0':
					setSectionName('letters');
					break;
				case '1':
					setSectionName('counts');
					break;
				case '2':
					setSectionName('links');
					break;
				case '3':
					setSectionName('tunes');
					break;
				case '4':
					setSectionName('slingshot');
					break;
				default:
					setSectionName('');
					break;
			}
		},
		// eslint-disable-next-line
		[props]
	);

	return (
		<div>
			<Carousel className='ml-16' controls={false} interval={1000}>
				<Carousel.Item>
					<Image
						className='d-block w-100'
						src={`assets/images/${sectionName}1-1x.svg`}
						alt='First slide'
						fluid
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Image
						className='d-block w-100'
						src={`assets/images/${sectionName}2-1x.svg`}
						alt='Second slide'
						fluid
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Image
						className='d-block w-100'
						src={`assets/images/${sectionName}3-1x.svg`}
						alt='Third slide'
						fluid
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Image
						className='d-block w-100'
						src={`assets/images/${sectionName}4-1x.svg`}
						alt='Fourth slide'
						fluid
					/>
				</Carousel.Item>
			</Carousel>
			<Container className='mt-40'>
				<Row>
					<p className='ml-16 gray-text'>
						Bring alive stories on screen by spelling words, letter by letter,
						in the real world. The vocabulary buliding and grammer kit comes
						with :
					</p>
					<ul className='gray-text'>
						<li>48 letter tiles and a trunk to play and store</li>
						<li>Age-adaptive spellings for Pre-kg to Grade 4</li>
						<li>6 games inside the Plugo app with 300+ levels</li>
					</ul>
				</Row>
				<Row className='ml-0 d-flex align-items-center'>
					<Image className='mr-8' src='assets/images/game-thumbnail-1.svg' />
					<Image className='mr-8' src='assets/images/game-thumbnail-2.svg' />
					<Image
						className='more-thumbnail-imgs'
						src='assets/images/game-modal-3.svg'
					/>
					<span className='img-overlay-text'>+4</span>
					<Button
						className='open-modal-btn'
						variant='outline-accent'
						onClick={() => setModalShow(true)}
					>
						Learn More
					</Button>
					<LandingPageModal
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
				</Row>
				<Row className='ml-0 mt-24'>
					{/* customize radio button */}
					<div className='p-0 form-check'>
						<input
							className='l-16 form-check-input'
							type='radio'
							name='flexRadioDefault'
							id='flexRadioDefault1'
							defaultChecked
						/>
						<label
							className='ml--42 form-check-label price'
							htmlFor='flexRadioDefault1'
						>
							$64.99
						</label>
						<br />
						<span className='gray-text'>
							Letters + gamepad
							<br />
							(My first Plugo kit)
						</span>
					</div>
					<div className='ml--16 p-0 form-check'>
						<input
							className='ml--48 form-check-input'
							type='radio'
							name='flexRadioDefault'
							id='flexRadioDefault2'
						/>
						<label
							className='ml--16 form-check-label price'
							htmlFor='flexRadioDefault2'
						>
							$34.99
						</label>
						<br />
						<span className='gray-text'>
							Letters kit
							<br />
							(I have a gamepad)
						</span>
					</div>
				</Row>
				<Row>
					<Button variant='primary' className='mt-26 ml-16 cart-btn'>
						Add to cart
					</Button>
				</Row>
			</Container>
		</div>
	);
}
