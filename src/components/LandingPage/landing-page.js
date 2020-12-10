import React, { useContext } from 'react';
import {
	Container,
	Image,
	Accordion,
	AccordionContext,
	Card,
} from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import ExpandedContent from '../ExpandedContent/expanded-content';
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
							<ExpandedContent eventKey='0' />
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
							<ExpandedContent eventKey='1' />
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
							<ExpandedContent eventKey='2' />
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
							<ExpandedContent eventKey='3' />
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
							<ExpandedContent eventKey='4' />
						</Accordion.Collapse>
					</Card.Body>
				</Card>
			</Accordion>
		</div>
	);
}

export default LandingPage;
