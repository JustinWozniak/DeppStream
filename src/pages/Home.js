import React from 'react';
import './Home.css';
import Image from '../elements/Image'

const Home = (props) => {
	return (
		<div className="home">
			<h1 className="main-header">
				<span className="text-color-white">Johnny Depp </span>
				<span className="text-color-primary">In-Deppth</span>
			</h1>
			<p className="secondary-header w3-container w3-center w3-animate-top">
				An in depth look at all of Johnnys projects and colaborations!
			</p>
      <div className="w3-center w3-animate-bottom">
              <Image
                className="intro-image"
                src={require('../images/intro image.jpg')}
                alt="Hero"
                width={300}
                height={504} />
          </div>
		</div>
	);
};

export default Home;
