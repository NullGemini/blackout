import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ResetButton from './reset-button';
import QuitButton from './quit-button';

class TopUI extends Component {

	constructor(props) {
		super();
		//handleResetClick
		//seed
		//handleUpdateSeed
		//handleStart
		//handleRandom
		//handleQuit
		//moves
	}

	validateInput(event) {
		console.log(event.target.value);
		return event.target.value.charCode >= 48 && event.target.value.charCode <= 57
	}

	render() {
		if (this.props.mode === 'demo') {
			return (
				<Grid>
					<Row className="show-grid">
						<Col xs={8}>
							<div className="input-group" id="seed-group">
								<span
									className="input-group-addon"
									id="seed-label"
								>
									Seed:
								</span>
								<input
									type="text"
									maxLength="8"
									className="form-control"
									placeholder="seed"
									id="seed-input"
									aria-describedby="seed-label"
									value={this.props.seed}
									onChange={this.props.handleUpdateSeed}
								/>
							</div>
						</Col>
						<Col xs={4}>
							<button className="btn btn-primary btn-sm" onClick={this.props.handleRandom}>Random</button>
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xs={8}>
							&nbsp;
						</Col>
						<Col xs={4}>
							<button className="btn btn-primary btn-sm" onClick={this.props.handleStart}>Start</button>
						</Col>
					</Row>
				</Grid>
			);
		} else if (this.props.mode === 'play') {
			return (
				<Grid>
					<Row className="show-grid">
						<Col xs={8}>
							<div className="input-group" id="seed-group">
								<span
									className="input-group-addon"
									id="seed-label"
								>
									Seed:
								</span>
								<input
									type="text"
									maxLength="8"
									className="form-control"
									placeholder="seed"
									id="seed-input"
									aria-describedby="seed-label"
									value={this.props.seed}
									onChange={this.props.handleUpdateSeed}
									disabled
								/>
							</div>
						</Col>
						<Col xs={4}>
							<QuitButton handleClick={ this.props.handleQuit } title='Quit' />
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xs={8}>
							<div className="input-group" id="seed-group">
								<span
									className="input-group-addon"
									id="seed-label"
								>
									Moves:
								</span>
								<input
									type="text"
									maxLength="8"
									className="form-control"
									placeholder="seed"
									id="seed-input"
									aria-describedby="seed-label"
									value={this.props.moves}
									onChange={this.props.handleUpdateSeed}
									disabled
								/>
							</div>
						</Col>
						<Col xs={4}>
							<ResetButton handleClick={ this.props.handleResetClick }/>
						</Col>
					</Row>
				</Grid>
			);
		} else {
			return (
				<Grid>
					<Row className="show-grid">
						<Col xs={12}>
							&nbsp;
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xs={12}>
							&nbsp;
						</Col>
					</Row>
				</Grid>
			)
		}
	}
}

export default TopUI;