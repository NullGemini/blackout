import React, { Component } from 'react';
import Tile from './tile';
import '../css/board.css';

class Board extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			lights: [
				[false, false, false, false, false],
				[false, false, false, false, false],
				[false, false, false, false, false],
				[false, false, false, false, false], 
				[false, false, false, false, false]
			],
			blackout: true
		};
	}

	//click light
	clickHandler (x, y) {
		this.updateLight(x, y);
		this.updateNeighbors(x, y);
		this.checkBoard();
	}

	updateLight(x, y) {
		var lights = this.state.lights;
		lights[x][y] = lights[x][y]?false:true;
		this.setState({lights: lights});
	}

	//update Surounding lights
	updateNeighbors(x, y) {
		var north = [x, y - 1];
		var south = [x, y + 1];
		var east = [x + 1, y];
		var west = [x - 1, y];

		if (north[1] >= 0) this.updateLight(north[0], north[1]);
		if (south[1] <= 4) this.updateLight(south[0], south[1]);
		if (east[0] <= 4) this.updateLight(east[0], east[1]);
		if (west[0] >= 0) this.updateLight(west[0], west[1]);
	}

	//check board
	checkBoard() {
		var blackout = true;
		for (var x = 0; x < 5; x++) {
			for (var y = 0; y < 5; y++) {
				if (this.state.lights[x][y]) {
					blackout = false;
					break;
				}
			}
		}
		this.setState({blackout: blackout});
	}

	render () {
		var builtBoard = [];
		for (var x = 0; x < 5; x++) {
			var builtRow = []
			for (var y = 0; y < 5; y++) {
				var index = x + '-' + y;
				builtRow.push(<Tile 
					x={ x }
					y={ y }
					light={ this.state.lights[x][y] }
					key={ index.toString() }
					index={ index.toString() }
					handleClick={ this.clickHandler.bind(this, x, y) }
				/>);
			}
			builtBoard.push(<div key={x.toString()} className="row">{builtRow}</div>);
		}
		return (
			<div className="board">
				{builtBoard}
				<h2>Blackout: {this.state.blackout?'true':'false'}</h2>
			</div>
		);
	}
}

export default Board;