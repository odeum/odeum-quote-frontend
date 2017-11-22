import React, { Component } from 'react'
import { Input, ProductWrapper } from '../../Styles/createNewQuote';

class ProductsFields extends Component {
	constructor(props) {
		super(props)
		this.state = {
			setVisblity: false,
			value: ''
		}
	}

	handleVisblity = (evt) => {
		console.log(this.state.value + ' state value')
		if (evt.target.value === '') {
			this.setState({ setVisblity: false })
		} else {
			this.setState({ setVisblity: true })
		}
	}

	render() {
		return (
			<div>
				<ProductWrapper>
					<Input
						placeholder="Begynd at skrive..."
						width="250px"
						marginRight="4px"
						marginTop="0px"
						marginBottom="0px"
						type="text"
						onChange={this.handleVisblity}
						value={this.props.value}
					/>
					{this.state.setVisblity ? this.props.renderChildren : null}
					<Input width="65px" marginRight="4px" marginTop="0px" marginBottom="0px" />
					<Input width="65px" marginRight="4px" marginTop="0px" marginBottom="0px" />
					<Input readOnly width="65px" marginTop="0px" marginBottom="0px" />
				</ProductWrapper>
			</div>
		);
	}
}
export default ProductsFields;