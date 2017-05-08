import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import logo from '../images/logo.svg';
import Board from './board';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			showRules: false,
			showAbout: false,
			showSource: false
		};
	}

	open(source) {
		if (source === 'rules') {
			this.setState({showRules: true});
		} else if (source === 'about') {
			this.setState({showAbout: true});
		} else if (source === 'source') {
			this.setState({showSource: true});
		}
	}

	close(source) {
		if (source === 'rules') {
			this.setState({showRules: false});
		} else if (source === 'about') {
			this.setState({showAbout: false});
		} else if (source === 'source') {
			this.setState({showSource: false});
		}
	}

	render() {
		return (
			<div id="app">
				<div id="app-header">
					<div id="title">BLACKOUT</div>
					<div className="btn-group btn-group-justified" role="group" aria-label="...">
						<div type="button" className="btn btn-outline-secondary" onClick={this.open.bind(this, 'rules')}>Rules</div>
						<div type="button" className="btn btn-outline-secondary" onClick={this.open.bind(this, 'about')}>About</div>
						<div type="button" className="btn btn-outline-secondary" onClick={this.open.bind(this, 'source')}>Source</div>
					</div>
				</div>

				<Board />

				<div id="footer">
					Powered by React <img src={logo} className="react-logo" alt="logo" />
				</div>

				<Modal show={this.state.showRules} onHide={this.close.bind(this, 'rules')}>
					<Modal.Header>
						<Modal.Title>Rules</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Setting the Board</h4>
						<p>Enter a seed to play (1 - 33,554,432) or click 'Random' to have one generated for you. Click 'Start' to begin your game.</p>

						<h4>Basic Gameplay</h4>
						<p>The goal of the puzzle is to switch all the lights off, preferably in as few button presses as possible. Pressing any of the lights will toggle it and the adjacent lights. Not all configurations are solvable.</p>
						<p>At anytime you may click 'Reset' to try again or 'Quit' to return to the main screen.</p>

						<h4>Next Level</h4>
						<p>If you beat a particular configuration, see if you can beat it in fewer moves or challenge your friends to do the same.</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close.bind(this, 'rules')}>Close</Button>
					</Modal.Footer>
				</Modal>

				<Modal show={this.state.showAbout} onHide={this.close.bind(this, 'about')}>
					<Modal.Header>
						<Modal.Title>About</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>NullGemini (Adam Mugnaini) is a web developer.</p>
						<p>The point of the app was to explore and build understanding of the ReactJS framework.</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close.bind(this, 'about')}>Close</Button>
					</Modal.Footer>
				</Modal>

				<Modal show={this.state.showSource} onHide={this.close.bind(this, 'source')}>
					<Modal.Header>
						<Modal.Title>Source</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>I'd love to hear feedback on tweaks, criticism, etc. The source code can be found on my github page.</p>
						<p><a href="https://github.com/NullGemini/blackout" target="_blank">https://github.com/NullGemini/blackout</a></p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close.bind(this, 'source')}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default App;
