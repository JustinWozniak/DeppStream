import React from 'react';
import './Home.css';
import Image from '../elements/Image'
import WhatsNew from '../pages/WhatsNew/index'

const Home = (props) => {
	return (
		<div className="home">
			<span className="main-header">
				<h1 className="text-color-white">Johnny Depp </h1>
				<h1 className="text-color-primary">In-Deppth</h1>
			</span>
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
		  <WhatsNew />
		</div>
	);
};

export default Home;
