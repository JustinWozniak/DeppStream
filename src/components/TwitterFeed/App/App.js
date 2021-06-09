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
			})
			.catch(function(error) {
			});
	};

	render() {
		let tweets = this.state.tweets.reverse();
		let tweetCards = tweets.map((tweet) => {
			return <Tweet key={tweet.id} tweet={tweet} />;
		});
		return (
			<div className="app-container">
				<span className="main-header-twitter">
					<h6 className="text-color-white">Johnny Depp </h6>
					<h6 className="text-color-primary">In-Deppth</h6>
					<h6 className="text-color-primary">Live Twitter Feed</h6>
				</span>
				<Header term={this.state.term} updateSearchTerm={this.updateSearchTerm} />
				<div className="tweets-container">{tweetCards}</div>
			</div>
		);
	}
}

export default withAlert(App);
