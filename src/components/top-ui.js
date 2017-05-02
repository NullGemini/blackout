import React, { Component } from 'react';
import ResetButton from './reset-button';
import QuitButton from './quit-button';
import '../css/top-ui.css';

class TopUI extends Component {

	constructor(props) {
		super();
		//handleResetClick
		//seed
		//handleUpdateSeed
		//handleStart
		//handleRandom
		//handleQuit
	}

	render() {
		if (this.props.mode === 'demo') {
			return (
			<div className='row'>
				<label>Seed</label>
				<input type="text" value={this.props.seed} onChange={this.props.handleUpdateSeed}/>
				<button onClick={this.props.handleRandom}>Random</button>
				<button onClick={this.props.handleStart}>Start</button>
			</div>
			);
		} else if (this.props.mode === 'play') {
			return (
				<div className='row'>
					<ResetButton handleClick={ this.props.handleResetClick }/>
					<QuitButton handleClick={ this.props.handleQuit } title='Quit Game' />
					<h2>Seed: {this.props.seed}</h2>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default TopUI;