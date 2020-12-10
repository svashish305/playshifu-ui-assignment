import React, { useState } from 'react';
import './landing-page-modal.scss';
import { Button, Modal, Image, Nav } from 'react-bootstrap';

export default function LandingPageModal(props) {
	const [key, setKey] = useState('learnings');

	const renderTabContent = (key) => {
		switch (key) {
			case 'learnings':
				return 'Learnings Body';
			case 'games':
				return 'Games Body';
			case 'devices':
				return 'Devices Body';
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
					className='flex-nowrap'
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
				<Button variant='link' onClick={props.onHide}>
					Close
					<Image className='ml-4' src='assets/images/close-icon.svg' fluid />
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
