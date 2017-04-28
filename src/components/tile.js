import React, { Component } from 'react';
import '../css/tile.css';

class Tile extends Component {

	constructor(props) {
		super(); 
	}

	render() {
		return (
		<div
			className={this.props.light?'tile light-on':'tile light-off'}
			key={this.props.index}
			onClick={ this.props.handleClick }
			>
		</div>
		);
	}
};

export default Tile;