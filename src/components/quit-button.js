import React, { Component } from 'react';

class QuitButton extends Component {

	constructor(props) {
		super(); 
		//handleClick
		//title
	}

	render() {
		return (
		<button className="btn btn-primary btn-sm" onClick={ this.props.handleClick } >{this.props.title}</button>
		);
	}
};

export default QuitButton;