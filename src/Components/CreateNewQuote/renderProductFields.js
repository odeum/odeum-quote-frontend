import React, { Component } from 'react'
import { Input, ProductWrapper } from '../../Styles/createNewQuote';
import { LinkPosition } from '../../Styles/dropdown';

class ProductsFields extends Component {
	render() {
		return (
			<div>
				<ProductWrapper>
					<LinkPosition>
						<Input
							placeholder="Begynd at skrive..."
							width="206px"
							marginRight="4px"
							marginTop="0px"
							marginBottom="0px"
							type="text"
							onChange={this.props.handleChange}
							value={this.props.value}
						/>
						{this.props.visbilty ? this.props.renderChildren : null}
					</LinkPosition>
					<Input width="65px" marginRight="4px" marginTop="0px" marginBottom="0px" />
					<Input width="65px" marginRight="4px" marginTop="0px" marginBottom="0px" />
					<Input readOnly width="65px" marginTop="0px" marginBottom="0px" value={this.props.price}/>
				</ProductWrapper>
			</div>
		);
	}
}
export default ProductsFields;