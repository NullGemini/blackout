import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/app.css';
import Board from './board';

class App extends Component {
	render() {
		return (
		<div className="App">
			<div className="App-header">
				<h2>BLACKOUT</h2>
			</div>
			<Board />
			<div>
				Powered by React <img src={logo} className="App-logo" alt="logo" />
			</div>
		</div>
		);
	}
}

export default App;
