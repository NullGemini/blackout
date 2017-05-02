import React, { Component } from 'react';
import '../css/quit-button.css';

class QuitButton extends Component {

	constructor(props) {
		super(); 
		//handleClick
		//title
	}

	render() {
		return (
		<button onClick={ this.props.handleClick } >{this.props.title}</button>
		);
	}
};

export default QuitButton;