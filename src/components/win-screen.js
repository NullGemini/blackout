import React, { Component } from 'react';
import QuitButton from './quit-button';
import '../css/win-screen.css';

class WinScreen extends Component {

	constructor(props) {
		super();
		//mode
		//moves
		//seed
		//handleQuit
	}

	render() {
		if (this.props.mode === 'win') {
			return (
			<div>
				<h1>Winner!</h1>
				<h2>Total moves: {this.props.moves}</h2>
				<h2>Seed: {this.props.seed}</h2>
				<QuitButton handleClick={ this.props.handleQuit } title='New Game' />
			</div>
			);
		} else {
			return null;
		}
	}
}

export default WinScreen;