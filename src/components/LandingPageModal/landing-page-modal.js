import React, { useState } from 'react';
import './landing-page-modal.scss';
import { Button, Modal, Image, Nav, Container } from 'react-bootstrap';

export default function LandingPageModal(props) {
	const [key, setKey] = useState('learnings');

	const renderTabContent = (key) => {
		switch (key) {
			case 'learnings':
				return (
					<div>
						<label className='mb-heading'>
							Each game has different words for different grades!
						</label>
						<label className='mt-9 mb-heading'>Pre-K, K, Grade 1:</label>
						<ul className='modal-ul'>
							<li className='p-i-s-6 mb-text'>3-4 letter words with phonics</li>
							<li className='p-i-s-6 mb-text'>Sight words</li>
							<li className='p-i-s-6 mb-text'>Sentence formation</li>
						</ul>
						<label className='mt-9 mb-heading'>Grade 2 and above:</label>
						<ul className='modal-ul'>
							<li className='p-i-s-6 mb-text'>
								Challenging words with an introduction to grammar concepts
							</li>
							<li className='p-i-s-6 mb-text'>
								Action verbs, opposite words, root words, prepositions etc.
							</li>
						</ul>
					</div>
				);
			case 'games':
				return (
					<div>
						<Container className='p-0'>
							<Image
								className='modal-img'
								src='assets/images/game-modal-1.svg'
								fluid
							/>
							<Image
								className='modal-img'
								src='assets/images/game-modal-2.svg'
								fluid
							/>
							<Image
								className='modal-img'
								src='assets/images/game-modal-3.svg'
								fluid
							/>
							<Image
								className='modal-img'
								src='assets/images/game-modal-4.svg'
								fluid
							/>
							<Image
								className='modal-img'
								src='assets/images/game-modal-5.svg'
								fluid
							/>
						</Container>
						<label className='mt-9 mb-heading'>How it works:</label>
						<ol className='modal-ol'>
							<li className='p-i-s-6 mb-text'>
								Place the letter on the Trunk to spell words according to the
								visual on screen.
							</li>
							<li className='p-i-s-6 mb-text'>
								The app will say out loud every letter placed and the phonics.
							</li>
							<li className='p-i-s-6 mb-text'>
								The app guides children with right and wrong letter placed at
								every step.
							</li>
						</ol>
					</div>
				);
			case 'devices':
				return (
					<div>
						<label className='mb-heading'>iOS:</label>
						<ul className='modal-ul'>
							<li className='p-i-s-6 mb-text'>{`iPad 5th gen & above`}</li>
							<li className='p-i-s-6 mb-text'>{`iPad Mini 2 & above`}</li>
							<li className='p-i-s-6 mb-text'>{`iPad Air all models`}</li>
							<li className='p-i-s-6 mb-text'>{`iPad Pro all models (except Pro 12")`}</li>
							<li className='p-i-s-6 mb-text'>{`iPhone 6 & above`}</li>
						</ul>
						<label className='mt-9 mb-heading'>Samsung:</label>
						<ul className='modal-ul'>
							<li className='p-i-s-6 mb-text'>
								{`2015 & newer, 2GB RAM and above`}
							</li>
						</ul>
						<label className='mt-9 mb-heading'>Fire Tabets</label>
						<ul className='modal-ul'>
							<li className='p-i-s-6 mb-text'>
								Fire 7 - 2019 release (9th gen)
							</li>
							<li className='p-i-s-6 mb-text'>
								Fire 8 - 2018 release (8th gen), 2020 release (10th gen)
							</li>
							<li className='p-i-s-6 mb-text'>Fire 10 - Not Supported</li>
						</ul>
					</div>
				);
			default:
				return '';
		}
	};

	return (
		<Modal
			{...props}
			size='sm'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Header>
				<Nav
					className='ml--15 tab-header flex-nowrap'
					justify
					variant='tabs'
					activeKey={key}
					onSelect={(k) => setKey(k)}
				>
					<Nav.Item>
						<Nav.Link eventKey='learnings'>Learnings</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey='games'>Games</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey='devices'>Devices</Nav.Link>
					</Nav.Item>
				</Nav>
			</Modal.Header>
			<Modal.Body>{renderTabContent(key)}</Modal.Body>
			<Modal.Footer className='flex-center'>
				<Button
					variant='link'
					onClick={props.onHide}
					className='modal-close-btn'
				>
					Close
					<Image className='ml-4' src='assets/images/close-icon.svg' fluid />
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
