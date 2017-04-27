import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import Board from './components/board';

class App extends Component {
	render() {
		return (
		<div className="App">
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>Welcome to React</h2>
			</div>
			<p className="App-intro">
				Board Below
			</p>
			<Board />
		</div>
		);
	}
}

export default App;
