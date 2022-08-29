import React from 'react';

import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';

const NavBar = () => {
	return (
		<Navbar bg="primary" expand="lg" variant="dark" sticky="top">
			<Container>
				<Navbar.Brand>DogsPage</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar" />
				<Navbar.Collapse className="justify-content-end" id="navbar">
					<Nav>
						<NavLink active="true" href="#">
							Home
						</NavLink>
						<NavLink href="#">Contact</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
