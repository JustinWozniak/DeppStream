import React, { useState } from 'react';
import MovieTrailers from './MovieTrailers.js';
import MainHeader from '../../components/MainHeader';
const Videos = (props) => {
	const [ answer, setAnswer ] = useState('');

	let handleTrailersSubmit = (event) => {
		setAnswer('movieTrailers');
	};
	return (
		<div>
			<MainHeader title="Videos" />
			<div className="video-buttons">
			<button onClick={handleTrailersSubmit} name="movieTrailers" className="btn41-43 btn-41" >
				Movie Trailers
			</button>
			</div>
			<div className="videos-wrapper">{answer === 'movieTrailers' && <MovieTrailers />}</div>
		</div>
	);
};

export default Videos;
