import React, { useEffect, useState } from 'react';
import { ListGroup, Container, Carousel, Pagination } from 'react-bootstrap';
import Popup from '../components/Modal';

const Main = () => {
	const [src, setSrc] = useState('');

	const handleClick = () => alert('You chose a Chow');

	useEffect(() => {
		fetch('https://dog.ceo/api/breeds/image/random')
			.then((resp) => resp.json())
			.then((data) => setSrc(data.message));
	}, []);

	return (
		<Container>
			<main className="main row">
				<div className="left-section col-md-3">
					<h2>Breeds</h2>
					<ListGroup>
						<ListGroup.Item onClick={handleClick} action variant="primary">
							Chow
						</ListGroup.Item>
						<ListGroup.Item variant="secondary">Husky</ListGroup.Item>
						<ListGroup.Item variant="success">Pitbull</ListGroup.Item>
						<ListGroup.Item variant="dark">Shihtzu</ListGroup.Item>
					</ListGroup>
					<Pagination>
						<Pagination.Item>Prev</Pagination.Item>
						<Pagination.Item>1</Pagination.Item>
						<Pagination.Item>2</Pagination.Item>
						<Pagination.Item>Next</Pagination.Item>
					</Pagination>
					<Popup />
				</div>
				<div className="right-section col-md-9">
					<h2>Dogs</h2>
					<Carousel>
						<Carousel.Item>
							<img className="w-100" src={src} alt="First dog" />
						</Carousel.Item>
						<Carousel.Item>
							<img className="w-100" src={src} alt="Second dog" />
						</Carousel.Item>
					</Carousel>
				</div>
			</main>
		</Container>
	);
};

export default Main;
