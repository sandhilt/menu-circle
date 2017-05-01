import React, { Component } from 'react';
import './App.css';

const divide = (x) => {
	return `.app .item { width: ${1 / x}% }`;
}

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			count: 0
		}
	}

	render() {
		return (
			<div className="App">
				<style>{divide(this.state.count)}</style>
				<button onClick={() => this.setState({
					count: this.state.count + 1
				})}>Rise up</button>
				<section className="row">
					{Array.from(Array(this.state.count).keys()).map((x) => {
						return <button className="item" key={x.toString()}>{x}</button>;
					})}
				</section>
			</div>
		);
	}
}

export default App;
