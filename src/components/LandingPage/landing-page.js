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

	const sections = [
		{
			color: 'green',
			subText: 'WORD BUILDING',
			text: 'Letters',
			sectionName: 'letters',
		},
		{
			color: 'orange',
			subText: 'HANDS-ON MATH',
			text: 'Count',
			sectionName: 'count',
		},
		{
			color: 'purple',
			subText: 'MAGNETIC BLOCKS',
			text: 'Link',
			sectionName: 'link',
		},
		{
			color: 'lightblue',
			subText: 'PIANO LEARNING',
			text: 'Tunes',
			sectionName: 'tunes',
		},
		{
			color: 'red',
			subText: 'FUN CATAPULT',
			text: 'Slingshot',
			sectionName: 'slingshot',
		},
	];

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
			<Container className='p-0 mt-40 mb-30'>
				<label className='component2-label1'>Works with plugo app</label>
				<label className='component2-heading'>Five gaming kits</label>
			</Container>
			<Accordion>
				{sections &&
					sections.length > 0 &&
					sections.map((section, index) => {
						return (
							<Card key={section && index}>
								<Card.Body>
									<hr
										className={`m-0 h-seg ${section.color}-border float-left`}
									/>
									<label className='card-subtext float-left'>
										{section.subText}
									</label>
									<label
										className={`mt-12 card-text ${section.color} float-left`}
									>
										{section.text}
									</label>
									<Image
										className='card-img'
										src={`assets/images/lp-${section.sectionName}.svg`}
										fluid
									/>
									<ContextAwareToggle
										eventKey={`${index}`}
									></ContextAwareToggle>
									<Accordion.Collapse eventKey={`${index}`}>
										<ExpandedContent eventKey={`${index}`} />
									</Accordion.Collapse>
								</Card.Body>
							</Card>
						);
					})}
			</Accordion>
		</div>
	);
}

export default LandingPage;
