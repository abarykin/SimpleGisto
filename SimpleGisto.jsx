class SimpleGistoItem extends React.Component {
	render() {
		return (
			<li style={this.props.style}>{this.props.index} - {this.props.value} </li>
		)
	}
}

class SimpleGisto extends React.Component {
	constructor() {
		super();
		window.addEventListener("resize", this.render);
	}

	render() {
		let max = 0;
		Object.keys(this.props.data).map(index => {
			if (max < this.props.data[index]) {
				max = this.props.data[index]
			}
		});
		let content = Object.keys(this.props.data).map(index => {
			let value = this.props.data[index],
				width = value / max * 100,
				style = {width: width + '%'};

			return (
				<SimpleGistoItem style={style} index={index} value={value}/>
			);
		});

		return <ul>{content}</ul>;
	}
}
