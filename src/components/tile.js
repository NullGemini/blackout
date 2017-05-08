import React, { Component } from 'react';

class Tile extends Component {

	constructor(props) {
		//light
		//handleClick
		//mode
		super(); 
	}

	render() {
		if (this.props.mode === 'play'){
			return (
			<div
				className={this.props.light ? 'tile play light-on' : 'tile play light-off'}
				onClick={ this.props.handleClick }
				>
			</div>
			);
		} else {
			return (
			<div
				className={this.props.light ? 'tile light-on' : 'tile light-off'}
				onClick={ this.props.handleClick }
				>
			</div>
			);
		}
	}
};

export default Tile;