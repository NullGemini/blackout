import React, { Component } from 'react';
import '../css/bottom-ui.css';

class BottomUI extends Component {

	constructor(props) {
		super();
		//moves
		//mode
	}

	render() {
		if (this.props.mode === 'play') {
			return (
				<div className='row'>
					Moves Made: {this.props.moves}
				</div>
			);
		} else {
			return null;
		}
	}
}

export default BottomUI;