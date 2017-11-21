import React, { Component } from 'react'
import { Input, ProductWrapper } from '../../Styles/createNewQuote';

class ProductsFields extends Component {
	constructor(props){
		super(props)
		this.state = {
			setVisblity: false,
			value: ''
		}
	}

	handleVisblity = (evt) => {
		console.log(evt.target.value + ' evt')
		this.setState({
			value:evt.target.value
		})
		console.log(this.state.value + ' state value')
		if(this.state.value === ''){
			this.setState({setVisblity: false})
		} else {
			this.setState({setVisblity: true})
		}
		console.log(this.state.setVisblity)
	}

	renderLabels = () => {
		if(this.props.products !== undefined){
		return this.props.products.map((item) => {
			return item.product.map((product, key) => {
				return <label key={key}>{product.name}</label>
			})
		})
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
						value={this.state.value} 
						onChange={this.handleVisblity}
					/>
					{this.state.setVisblity ? this.renderLabels() : null}
					<Input width="65px" marginRight="4px" marginTop="0px" marginBottom="0px" />
					<Input width="65px" marginRight="4px" marginTop="0px" marginBottom="0px" />
					<Input readOnly width="65px" marginTop="0px" marginBottom="0px" />
				</ProductWrapper>
			</div>
		);
	}
}
export default ProductsFields;