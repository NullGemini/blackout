import React, { Component } from 'react';

class ResetButton extends Component {

	constructor(props) {
		super();
		//handleClick
	}

	render() {
		return (
		<button className="btn btn-primary btn-sm" onClick={ this.props.handleClick } >Reset</button>
		);
	}
};

export default ResetButton;