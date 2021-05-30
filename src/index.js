import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
class Root extends Component {
	render() {
		return (
			<Router>
				<Navbar />
			</Router>
		);
	}
}

render(<Root />, document.getElementById('root'));
