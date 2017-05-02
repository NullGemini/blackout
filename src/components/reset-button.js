import React, { Component } from 'react';
import '../css/reset-button.css';


class ResetButton extends Component {

	constructor(props) {
		super();
		//handleClick
	}

	render() {
		return (
		<button className="btn btn-primary" onClick={ this.props.handleClick } >Reset Board</button>
		);
	}
};

export default ResetButton;