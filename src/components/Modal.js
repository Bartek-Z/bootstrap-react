import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Popup = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				More breeds
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Several popular dog breeds</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Labrador and Golden Retrievers, Beagles, Yorkshire Terriers, Bulldogs,
					Boxers.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Popup;
