import React from 'react';

const Movie = (props) => {
    console.log(props.movie)
	return (
		<div className="w3-center w3-animate-top">
		{props}
		</div>
	);
};

export default Movie;
