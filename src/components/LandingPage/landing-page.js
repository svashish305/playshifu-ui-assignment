import React, { useContext } from 'react';
import {
	Container,
	Row,
	Col,
	Image,
	Button,
	Accordion,
	AccordionContext,
	Card,
	Carousel,
} from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import './landing-page.scss';
import LandingPageModal from '../LandingPageModal/landing-page-modal';

function LandingPage() {
	const [modalShow, setModalShow] = React.useState(false);

	function ContextAwareToggle({ children, eventKey, callback }) {
		const currentEventKey = useContext(AccordionContext);

		const decoratedOnClick = useAccordionToggle(
			eventKey,
			() => callback && callback(eventKey)
		);

		const isCurrentEventKey = currentEventKey === eventKey;

		return (
			<Image
				onClick={decoratedOnClick}
				className='float-right'
				src={
					isCurrentEventKey
						? 'assets/images/caret-up.svg'
						: 'assets/images/caret-down.svg'
				}
			>
				{children}
			</Image>
		);
	}

	return (
		<div className='landing-page'>
			<Container className='p-0'>
				<Image className='plugo-img' src='assets/images/plugo-logo.svg' />
				<label className='plugo-caption'>
					One Gamepad
					<br /> Five Gaming Kits
				</label>
				<Image
					className='video-play-img'
					src='assets/images/video-play.svg'
					alt='play video'
				/>
				<Image src='assets/images/lp-banner.svg' fluid />
			</Container>
			<Container className='p-0 mt-40'>
				<label className='component2-label1'>Works with plugo app</label>
				<label className='component2-heading'>Five gaming kits</label>
			</Container>
			<Accordion>
				<Card className='mt-30'>
					<Card.Body>
						<hr className='m-0 h-seg green-border float-left' />
						<label className='card-subtext float-left'>WORD BUILDING</label>
						<label className='mt-12 card-text green float-left'>Letters</label>
						<Image
							className='card-img'
							src='assets/images/lp-letters.svg'
							fluid
						/>
						<ContextAwareToggle eventKey='0'></ContextAwareToggle>
						<Accordion.Collapse eventKey='0'>
							<div className='mt-18'>
								<Carousel className='ml-16'>
									<Carousel.Item interval={1000}>
										<Image
											className='d-block w-100'
											src='assets/images/letters1-1x.svg'
											alt='First slide'
											fluid
										/>
									</Carousel.Item>
									<Carousel.Item interval={1000}>
										<Image
											className='d-block w-100'
											src='assets/images/letters2-1x.svg'
											alt='Second slide'
											fluid
										/>
									</Carousel.Item>
									<Carousel.Item interval={1000}>
										<Image
											className='d-block w-100'
											src='assets/images/letters3-1x.svg'
											alt='Third slide'
											fluid
										/>
									</Carousel.Item>
									<Carousel.Item interval={1000}>
										<Image
											className='d-block w-100'
											src='assets/images/letters4-1x.svg'
											alt='Fourth slide'
											fluid
										/>
									</Carousel.Item>
								</Carousel>
								<Container className='mt-18'>
									<Row>
										<p className='ml-16 gray-text'>
											Bring alive stories on screen by spelling words, letter by
											letter, in the real world. The vocabulary buliding and
											grammer kit comes with :
										</p>
										<ul className='gray-text'>
											<li>48 letter tiles and a trunk to play and store</li>
											<li>Age-adaptive spellings for Pre-kg to Grade 4</li>
											<li>6 games inside the Plugo app with 300+ levels</li>
										</ul>
									</Row>
									<Row className='ml-0 d-flex align-items-center'>
										<Image
											className='mr-8'
											src='assets/images/game-thumbnail-1.svg'
										/>
										<Image
											className='mr-8'
											src='assets/images/game-thumbnail-2.svg'
										/>
										{/* add text overlay for counter to below image */}
										<Image
											className='more-thumbnail-imgs'
											src='assets/images/game-modal-3.svg'
										/>
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
												className='form-check-input'
												type='radio'
												name='flexRadioDefault'
												id='flexRadioDefault1'
												checked
											/>
											<label
												className='form-check-label price'
												for='flexRadioDefault1'
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
										<div className='ml-14 p-0 form-check'>
											<input
												className='form-check-input'
												type='radio'
												name='flexRadioDefault'
												id='flexRadioDefault2'
											/>
											<label
												className='form-check-label price'
												for='flexRadioDefault2'
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
						</Accordion.Collapse>
					</Card.Body>
				</Card>
			</Accordion>
			<Accordion>
				<Card>
					<Card.Body>
						<hr className='m-0 h-seg orange-border float-left' />
						<label className='card-subtext float-left'>HANDS-ON MATH</label>
						<label className='mt-12 card-text orange float-left'>Count</label>
						<Image
							className='card-img'
							src='assets/images/lp-count.svg'
							fluid
						/>
						<ContextAwareToggle eventKey='1'></ContextAwareToggle>
						<Accordion.Collapse eventKey='1'>
							{/* put expanded content (carousel) here */}
							<Card.Body>Hello! This card is now expanded</Card.Body>
						</Accordion.Collapse>
					</Card.Body>
				</Card>
			</Accordion>
			<Accordion>
				<Card>
					<Card.Body>
						<hr className='m-0 h-seg purple-border float-left' />
						<label className='card-subtext float-left'>MAGNETIC BLOCKS</label>
						<label className='mt-12 card-text purple float-left'>Link</label>
						<Image className='card-img' src='assets/images/lp-link.svg' fluid />
						<ContextAwareToggle eventKey='2'></ContextAwareToggle>
						<Accordion.Collapse eventKey='2'>
							{/* put expanded content (carousel) here */}
							<Card.Body>Hello! This card is now expanded</Card.Body>
						</Accordion.Collapse>
					</Card.Body>
				</Card>
			</Accordion>
			<Accordion>
				<Card>
					<Card.Body>
						<hr className='m-0 h-seg lightblue-border float-left' />
						<label className='card-subtext float-left'>PIANO LEARNING</label>
						<label className='mt-12 card-text lightblue float-left'>
							Tunes
						</label>
						<Image
							className='card-img'
							src='assets/images/lp-tunes.svg'
							fluid
						/>
						<ContextAwareToggle eventKey='3'></ContextAwareToggle>
						<Accordion.Collapse eventKey='3'>
							{/* put expanded content (carousel) here */}
							<Card.Body>Hello! This card is now expanded</Card.Body>
						</Accordion.Collapse>
					</Card.Body>
				</Card>
			</Accordion>
			<Accordion>
				<Card>
					<Card.Body>
						<hr className='m-0 h-seg red-border float-left' />
						<label className='card-subtext float-left'>FUN CATAPULT</label>
						<label className='mt-12 card-text red float-left'>Slingshot</label>
						<Image
							className='card-img'
							src='assets/images/lp-slingshot.svg'
							fluid
						/>
						<ContextAwareToggle eventKey='4'></ContextAwareToggle>
						<Accordion.Collapse eventKey='4'>
							{/* put expanded content (carousel) here */}
							<Card.Body>Hello! This card is now expanded</Card.Body>
						</Accordion.Collapse>
					</Card.Body>
				</Card>
			</Accordion>
		</div>
	);
}

export default LandingPage;
