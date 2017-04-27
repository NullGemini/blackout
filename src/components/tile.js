import React, { Component } from 'react';

class Tile extends Component {

	/*
	state () {
		return {
			xCoord: 0,
			yCoord: 0,
			light: false
		};
	}

	toggleLight() {
		var newState = this.state.light === true ? false : true;
		this.setState({ light: newState });
	}
	*/

	render() {
		return (
		<div key={this.props.index}>
			[{this.props.x}, {this.props.y}]
		</div>
		);
	}
};

export default Tile;