import React, { Component } from 'react';
import TopUI from './top-ui';
import Tile from './tile';
import BottomUI from './bottom-ui';
import WinScreen from './win-screen';
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
			mode: 'demo',
			seed: 1,
			moves: 0
		};
	}


	//////// GAME UI METHODS ////////

	// Handles the resetting of the board to the current seed
	resetClickHandler () {
		//Seed needs to be between 1 - 33,554,432
		let seed = this.state.seed;
		const converter = [];
		for (let i = 0; i < 25; i++) {
			converter.push(Math.pow(2,i));
		}
		const lights = [
				[false, false, false, false, false],
				[false, false, false, false, false],
				[false, false, false, false, false],
				[false, false, false, false, false], 
				[false, false, false, false, false]
			]

		let count = 24;
		for (let x = 4; x > -1; x--){
			for (let y = 4; y > -1; y--) {
				if (seed >= converter[count]) {
					//set grid
					
					lights[x][y] = true;
					seed -= converter[count];
					
				}
				count -= 1;
			}
		}

		this.setState({moves: 0});
		this.setState({lights: lights});
	}


	// Handles the cliking of Random Button
	randomClickHandler() {
		const seed = Math.floor(Math.random() * (33554431)) + 1;
		this.setState({seed: seed})
	}

	// Takes a new event and updates the board's seed off the value
	updateSeed(e) {
		const value = e.target.value;
		this.setState({seed: value});
	}

	// Begins a new game with the current seed
	startGame() {
		this.setState({mode: 'play'});
		this.resetClickHandler();
	}

	// Ends game and clears board to begin demo mode
	quitGame() {
		const lights = [
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false], 
			[false, false, false, false, false]
		]
		this.setState({lights: lights});
		this.setState({mode: 'demo'});
		this.setState({moves: 0});
	}


	//////// GAME BOARD METHODS ////////

	// Handles the clicking of the tiles in game
	tileClickHandler (x, y) {
		if (this.state.mode === 'play') {
			this.updateLight(x, y);
			this.updateNeighbors(x, y);
			this.updateMoves();
			this.checkBoard();
		}
	}

	// Takes the x & y coordinates and flips the tile's light status
	updateLight(x, y) {
		var lights = this.state.lights;
		lights[x][y] = lights[x][y]?false:true;
		this.setState({lights: lights});
	}

	// Updates the surounding tiles
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

	// Updates the moves state
	updateMoves() {
		this.setState({moves: this.state.moves + 1});
	}

	// Checks the board for win condition
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
		if (blackout) {
			this.setState({mode: 'win'});
		}
	}


	//////// DEMO MODE METHODS ////////

	// Lights/unlights a random tile (Used for demo mode)
	lightRandom() {
		const x = Math.floor(Math.random() * (5));
		const y = Math.floor(Math.random() * (5));
		this.updateLight(x, y);
	}

	//////// COMPONENT LIFECYCLE METHODS ////////
	
	componentWillMount() {
		// Sets timer for demo mode
		if (this.state.mode ==='demo') {
			this.timerID = setInterval(
				() => this.lightRandom(),
				1000
			);
		} 
	}

	componentDidUpdate() {
		// Clears and sets timer for demo (prevents multiple threads)
		if (this.state.mode ==='demo') {
			clearInterval(this.timerID);
			this.timerID = setInterval(
				() => this.lightRandom(),
				1000
			);
		// Just clears time if not in demo mode
		} else {
			clearInterval(this.timerID);
		}
	}

	
	componentWillUnmount() {
		// Clears timer for demo mode if board ever unmounts
		clearInterval(this.timerID);
	}

	// Main render method
	render () {

		// Building the bame board START
		var builtBoard = [];
		for (var x = 0; x < 5; x++) {
			var builtRow = []
			for (var y = 0; y < 5; y++) {
				var index = x + '-' + y;
				builtRow.push(
					<Tile
						key={ index.toString() }
						light={this.state.lights[x][y]}
						handleClick={this.tileClickHandler.bind(this, x, y)}
					/>
				);
			}
			builtBoard.push(<div key={x.toString()} className="row">{builtRow}</div>);
		}
		// Building the bame board END

		return (
			<div className="board">
				<WinScreen
				mode={this.state.mode}
				seed={this.state.seed}
				moves={this.state.moves}
				handleQuit={this.quitGame.bind(this)}
				/>
				<TopUI
					mode={this.state.mode}
					seed={this.state.seed}
					handleResetClick={this.resetClickHandler.bind(this)}
					handleUpdateSeed={this.updateSeed.bind(this)}
					handleStart={this.startGame.bind(this)}
					handleRandom={this.randomClickHandler.bind(this)}
					handleQuit={this.quitGame.bind(this)}
				/>
				{builtBoard}
				<BottomUI
					mode={this.state.mode}
					moves={this.state.moves}
				/>
			</div>
		);
	}
}

export default Board;