import React, { Component } from 'react'
import { Input, ProductWrapper } from '../../Styles/createNewQuote';
import { LinkPosition } from '../../Styles/dropdown';
import { connect } from 'react-redux';
import { fetchProducts } from '../../Actions/productAction';
import ProductDropdown from './productDropdown';
//import onClickOutside from "react-onclickoutside";

class ProductsFields extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productValue: '',
			productVisibility: false,
			totalPrice: 0
		}
	}

	componentDidMount(){
		this.props.fetchProducts();
	}

	setProduct = (e, product) => {
		console.log(product)
		this.setState({
			productValue: product.name,
			productVisibility: false,
			totalPrice: product.price
		})
	}

	handleChange = (evt) => {
		this.setState({productValue: evt.target.value})
        if (evt.target.value === '') {
            this.setstate.productVisibility({productVisibility: false})
        } else {
           this.setstate.productVisibility({productVisibility: true})
        }
    }

	renderProducts = () => {
		var productValue = this.state.productValue
		return this.props.product.map((item) => {
			return item.product.map((product, key) => {
				if (product.name.toLowerCase().includes(productValue.toLowerCase())) {
					return <ProductDropdown key={key} name={product.name} setProduct={(e) => this.setProduct(e, product)}/>
				} else {
					return null;
				}
			})
		})
	}

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
							onChange={this.handleChange}
							value={this.state.productValue}
						/>
						{this.state.productVisibility ? this.renderProducts() : null}
					</LinkPosition>
					<Input width="65px" marginRight="4px" marginTop="0px" marginBottom="0px" />
					<Input width="65px" marginRight="4px" marginTop="0px" marginBottom="0px" />
					<Input readOnly width="65px" marginTop="0px" marginBottom="0px" value={this.state.totalPrice} />
				</ProductWrapper>
			</div>
		);
	}
}

function mapStateToProps(state, prop){
	return{
		product: state.product
	}
}


export default connect(mapStateToProps, {fetchProducts})(ProductsFields)

//var commponnt = onClickOutside(CreateNewQuote);

    /*handleClickOutside = () => {
        this.setState({ productVisibility: false })
    }*/