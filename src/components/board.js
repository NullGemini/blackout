import React, { Component } from 'react';
import Tile from './tile';

class Board extends Component {

	render () {
		var builtBoard = [];
		for (var x = 0; x < 5; x++) {
			var builtRow = []
			for (var y = 0; y < 5; y++) {
				var index = x + '-' + y;
				builtRow.push(<Tile x={x} y={y} light={false} key={index.toString()} index={index.toString()} />);
			}
			builtBoard.push(<div key={x.toString()}className="row">{builtRow}</div>);
		}
		return <div>{builtBoard}</div>;
	}
}

export default Board;