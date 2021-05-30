import React from 'react';
import './Navbar.css';
import Logo from '../../assets/images/logo.svg';
import TwitterFeed from '../TwitterFeed/Twitt/Twitt';
import { BrowserRouter as Route, Link } from 'react-router-dom';
const Navbar = ({ sticky }) => {
	return (
		<div>
			<nav className={sticky ? 'navbar navbar-sticky' : 'navbar'}>
				<div className="navbar--logo-holder">
					{sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
					<h1>JDID</h1>
				</div>
        <ul className="navbar--link">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/TwitterFeed">TwitterFeed</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<Route path="/TwitterFeed" component={TwitterFeed} />
		</div>
	);
};
export default Navbar;
