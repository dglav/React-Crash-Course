import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
	constructor() {
		super();
		console.log('App - Constructor');
	}

	componentDidMount() {
		console.log('App - Mounted');
	}

	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
			{ id: 5, value: 0 }
		]
	};

	render() {
		console.log('App - Rendered');
		return (
			<div className="App">
				{/* <Navbar totalCounters={this.state.counters.filter((counter) => counter.value > 0).length} /> */}
				<Navbar
					totalCounters={this.state.counters.reduce((accumulator, counter) => accumulator + counter.value, 0)}
				/>
				<Counters
					counters={this.state.counters}
					onReset={this.handleReset}
					onIncrement={this.handleIncrement}
					onDelete={this.handleDelete}
				/>
			</div>
		);
	}

	handleIncrement = (counter) => {
		const counters = [ ...this.state.counters ];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter }; // using the spread operator here to make a deep copy of the input counter object
		counters[index].value++;
		// console.log('state.counters.value', this.state.counters[index].value);
		// console.log('index', index);
		this.setState({ counters });
		// console.log('updated counters', counters);
	};

	handleDelete = (counterId) => {
		// console.log('Event handler called', counterId);
		const counters = this.state.counters.filter((counter) => counter.id !== counterId);
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map((counter) => {
			counter.value = 0;
			return counter;
		});
		this.setState({ counters });
	};
}

export default App;
