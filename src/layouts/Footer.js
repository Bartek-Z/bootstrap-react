import React from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';

const Footer = () => {
	return (
		<>
			<div className="bg-primary py-3 text-white">
				<Container>
					<div className="row">
						<div className="col-md-6">
							<h4>DogsPage</h4>
							<p>Dogs are man's best and most faithful friends.</p>
						</div>
						<div className="col-md-5">
							<Form action="">
								<h4>Newsletter</h4>
								<Form.Label>Email address</Form.Label>
								<InputGroup>
									<Form.Control type="email" placeholder="Enter your email" />
									<Button variant="outline-light">Sign in</Button>
								</InputGroup>
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form>
						</div>
					</div>
				</Container>
			</div>
			<footer className="bg-secondary">
				<p>Copyright © DogsPage</p>
			</footer>
		</>
	);
};

export default Footer;
