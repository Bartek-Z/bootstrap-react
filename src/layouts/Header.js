import React, { useState } from 'react';
import NavBar from '../components/NavBar';

import { Breadcrumb, Container, Button, Alert } from 'react-bootstrap';

const Header = () => {
	const [show, setShow] = useState(false);

	const alert = show ? (
		<Alert variant="info">
			<Alert.Heading>Hello!</Alert.Heading>
			<p>Thank you for the like</p>
		</Alert>
	) : null;

	const handleAlert = () => setShow(!show);

	return (
		<header>
			<NavBar />
			<div className="header__bg">
				<div className="header__bg__opacity">
					<Container>
						<h1>Welcome to the dogs page !!!</h1>
						<Button variant="primary" size="lg" active onClick={handleAlert}>
							Click to like it
						</Button>
					</Container>
				</div>
			</div>
			<Container>
				<Breadcrumb>
					<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
					<Breadcrumb.Item active href="#">
						Contact
					</Breadcrumb.Item>
				</Breadcrumb>
				{alert}
			</Container>
		</header>
	);
};

export default Header;
