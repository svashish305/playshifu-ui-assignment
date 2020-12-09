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
} from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import './landing-page.scss';

function LandingPage() {
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
			<Accordion defaultActiveKey='0'>
				<Card className='mt-30'>
					<Card.Body>
						<hr className='m-0 h-seg green float-left' />
						<label className='card-subtext float-left'>WORD BUILDING</label>
						<label className='mt-12 card-text green float-left'>Letters</label>
						<Image
							className='card-img'
							src='assets/images/lp-letters.svg'
							fluid
						/>
						<ContextAwareToggle eventKey='0'></ContextAwareToggle>
						<Accordion.Collapse eventKey='0'>
							{/* put expanded content here */}
							<Card.Body>Hello! This card is now expanded</Card.Body>
						</Accordion.Collapse>
					</Card.Body>
				</Card>
			</Accordion>
		</div>
	);
}

export default LandingPage;
