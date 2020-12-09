import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './landing-page.scss';

function LandingPage() {
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
		</div>
	);
}

export default LandingPage;
