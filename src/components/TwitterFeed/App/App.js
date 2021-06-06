import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import socketIOClient from 'socket.io-client';
import axios from 'axios';
import './App.css';

import Header from '../Header/Header';
import Tweet from '../Tweet/Tweet';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tweets: [],
			term: '',
			loading: true
		};
	}

	componentDidMount() {
		const socket = socketIOClient('http://localhost:3000/');

		socket.on('connect', () => {
			socket.on('newTweet', (tweet) => {
				this.setState((prevState) => ({
					tweets: [ ...prevState.tweets, tweet ]
				}));
			});
			socket.on('searchTerm', (term) => {
				this.setState({ term });
				document.getElementById('searchInput').value = '';
				this.props.alert.show('Please Wait Until Somebody Posts About Johnny...');
			});
		});
		socket.on('disconnect', () => {
			socket.off('newTweet');
			socket.removeAllListeners('newTweet');
		});
	}

	updateSearchTerm = (newTerm) => {
		axios
			.post('/updateSearchTerm', {
				searchTerm: newTerm
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	render() {
		let tweets = this.state.tweets.reverse();
		let tweetCards = tweets.map((tweet) => {
			return <Tweet key={tweet.id} tweet={tweet} />;
		});

		if (tweetCards.length < 0) {
			return (
				<div className="app-container">
					<h1 className="main-header">
						<h6 className="text-color-white">Johnny Depp </h6>
						<h6 className="text-color-primary">In-Deppth</h6>
						<h6 className="text-color-primary">Live Twitter Feed</h6>
					</h1>
					<Header />
					<div className="tweets-container">Please wait...Loading</div>
				</div>
			);
		}
	else {
			return (
				<div className="app-container">
          <h1 className="main-header-twitter">
						<h6 className="text-color-white">Johnny Depp </h6>
						<h6 className="text-color-primary">In-Deppth</h6>
						<h6 className="text-color-primary">Live Twitter Feed</h6>
					</h1>
					<Header term={this.state.term} updateSearchTerm={this.updateSearchTerm} />
					<div className="tweets-container">{tweetCards}</div>
				</div>
			);
		}
	}
}

export default withAlert(App);
