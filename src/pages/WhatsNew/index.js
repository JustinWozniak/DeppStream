import React from 'react';
import './WhatsNew.css';
import Image from '../../elements/Image';

const WhatsNew = (props) => {
	return (
		<div className="w3-center w3-animate-top">
			<h1 className="main-header">
				<span className="text-color-white">Whats New</span>
			</h1>
			<p className="secondary-header w3-container w3-center w3-animate-top">
				Here we'll post new pages that have been made
			</p>
			<div>
				<div className="w3-container w3-center w3-animate-right">
					<div className="whats-new-header">Character Overview</div>
					<h3 className="whats-new-secondary-header">Raul Duke</h3>
					<p className="whats-new-paragraph">
						Raoul Duke is the fictional character and antihero based on Hunter S. Thompson in his
						autobiographical novel Fear and Loathing in Las Vegas. The book was originally written under the
						name Raoul Duke.
					</p>
				</div>
				<div>
					<Image
						className="whats-new-images"
						src={require('../../images/movies/fearandloathing/raulduke.jpg')}
						alt="Features split 01"
					/>
				</div>
			</div>

			<div>
				<div className="split-item-content center-content-mobile reveal-from-right">
				<div className="whats-new-header">Band Spotlight</div>
				<h3 className="whats-new-secondary-header">The Hollywood Vampires</h3>
					<p className="whats-new-paragraph">
						The Hollywood Vampires are an American rock supergroup formed in 2015 by Alice Cooper, Johnny
						Depp, and Joe Perry to honor the music of the rock stars who died from excess in the 1970s.
					</p>
				</div>
				<div />
				<div>
					<Image
						className="whats-new-images"
						src={require('../../images/bands/hollywoodvampires/hollywoodvampires.jpeg')}
						alt="Features split 02"
					/>
				</div>
			</div>

			<div>
				<div>
				<div className="whats-new-header">Movie Overview</div>
				<h3 className="whats-new-secondary-header">Blow</h3>
					<p className="whats-new-paragraph">
						The story of how George Jung, along with the Medellín Cartel headed by Pablo Escobar,
						established the American cocaine market in the 1970s in the United States.
					</p>
				</div>
				<div>
					<Image
						className="whats-new-images"
						src={require('../../images/movies/blow/Blow.jpg')}
						alt="Features split 03"
					/>
				</div>
			</div>
		</div>
	);
};

export default WhatsNew;
