import React from 'react';
import CarouselComponent from '../../../src/components/Carousel/index';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MainHeader from '../../components/MainHeader/index';
import '../../components/Carousel/carousel.css'
const Movies = (props) => {
	return (
		<div>
			<MainHeader title="Johnnys Movies" />
			<div className="carousel-wrapper">
				<CarouselComponent />
			</div>
		</div>
	);
};

export default Movies;
