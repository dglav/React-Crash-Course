import React, { Component } from 'react';

class Counter extends Component {
	// state = {
	// 	value: this.props.counter.value,
	// 	imageUrl: 'https://picsum.photos/200',
	// 	tags: []
	// };

	// handleIncrement(product) {
	// 	console.log(product);
	// 	this.setState({ value: this.state.value + 1 }); // number++ changes original variable. like pd.dataframe().inplace
	// }

	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	componentDidUpdate(prevProps, prevState) {
		// console.log('prevProps', prevProps);
		// console.log('prevState', prevState);
		// console.log('Counter - Updated');
		if (prevProps.counter.value !== this.props.counter.value) {
			// Ajax call and get new data from the server
		}
	}

	componentWillUnmount() {
		// console.log('Counter - Will Unmount');
	}

	styles = {
		fontSize: '50px',
		fontWeight: 'bold'
	};

	render() {
		// console.log('props', this.props);
		return (
			<div>
				{this.props.children}
				<span className={this.getBadgeClasses()}>{this.formatValue()}</span>
				<button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
					Increment
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>

				{/* {this.state.tags.length === 0 && <p>Please create a new tag!</p>}
				{this.renderTags()} */}
			</div>
		);
	}

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatValue() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}

	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no tags!</p>;

		return <ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>;
	}
}

export default Counter;
