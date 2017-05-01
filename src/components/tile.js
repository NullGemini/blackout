import React, { Component } from 'react';
import '../css/tile.css';

class Tile extends Component {

	constructor(props) {
		//light
		//handleClick
		super(); 
	}

	render() {
		return (
		<div
			className={this.props.light?'tile light-on':'tile light-off'}
			onClick={ this.props.handleClick }
			>
		</div>
		);
	}
};

export default Tile;