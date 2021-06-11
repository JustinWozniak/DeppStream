import React, { useState } from 'react';
import MovieTrailers from './MovieTrailers.js';
import MainHeader from '../../components/MainHeader';
import Interviews from './Interviews'
const Videos = (props) => {
	const [ answer, setAnswer ] = useState('');

	let handleTrailersSubmit = (event) => {
		setAnswer('movieTrailers');
	};
	let handleInterviewsSubmit = (event) => {
		setAnswer('Interviews');
	};
	return (
		<div>
			<MainHeader title="Videos" />
			<div className="video-buttons">
			<button onClick={handleTrailersSubmit} name="movieTrailers" className="btn41-43 btn-41" >
				Movie Trailers
			</button>
			<button onClick={handleInterviewsSubmit} name="Interviews" className="bn5" >
				Interviews
			</button>
			</div>
			<div className="videos-wrapper">{answer === 'movieTrailers' && <MovieTrailers />}</div>
			<div className="videos-wrapper">{answer === 'Interviews' && <Interviews />}</div>
		</div>
	);
};

export default Videos;
