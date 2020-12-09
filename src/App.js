import React from 'react';
import './App.scss';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import LandingPage from './components/LandingPage/landing-page';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Container>
					<Row className='flex-center'>
						<Col>
							<Image
								className='logo'
								src='assets/images/logo.png'
								alt='shifu'
							/>
						</Col>
						<Col className='header-right'>
							<Button variant='secondary' className='shop-btn'>
								Shop
							</Button>
							<Image
								className='header-right-icon'
								src='assets/images/cart.png'
								alt='cart'
							/>
							<Image
								className='header-right-icon'
								src='assets/images/menu.png'
								alt='menu'
							/>
						</Col>
					</Row>
				</Container>
			</header>
			<LandingPage />
		</div>
	);
}

export default App;
