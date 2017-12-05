import React, { Component } from 'react'
import { Input, ProductWrapper } from '../Styles/createNewQuote';
import { LinkPosition } from '../Styles/dropdown';
import { connect } from 'react-redux';
import { fetchProducts, saveProducts } from '../Actions/productAction';
import { chosenProducts } from '../Actions/quoteAction';
import ProductDropdown from '../Components/CreateNewQuote/productDropdown';
import onClickOutside from "react-onclickoutside";

class ProductsFields extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productValue: '',
			productVisibility: false,
			totalPrice: 0,
			amount: 0,
			discount: 0,
			description: '',
			product: {}
		}
	}

	componentDidMount() {
		this.props.fetchProducts();
	}

	setProduct = (e, product) => {
		this.props.saveProducts(product);
		this.setState({
			productValue: product.name,
			productVisibility: false,
			totalPrice: product.price,
			amount: 1,
			discount: 0,
			description: product.description,
			product: product
		})

		this.props.chosenProducts(
			product._id, 
			product.price, 
			product.name, 
			1, 
			0, 
			product.subscription, 
			product.description
		);
	}

	onDiscountChange = (e) => {
		const re = /^[0-9\b]+$/
		var tempPrice = this.state.product.price * this.state.amount
		if (e.target.value === '' || re.test(e.target.value)) {

			if (e.target.value !== '') {
				tempPrice -= parseInt(e.target.value, 10)
			}

			this.setState({
				discount: e.target.value,
				totalPrice: tempPrice
			})

			this.props.calculatePrice(
				this.state.product._id, 
				tempPrice, 
				this.state.product.name, 
				this.state.amount, 
				this.state.discount, 
				this.state.product.subscription
			);
		}

	}

	onAmountChange = (e) => {
		const re = /^[0-9\b]+$/;
		var tempPrice
		if (e.target.value === '' || re.test(e.target.value)) {

			this.setState({ amount: e.target.value })

			if (e.target.value !== '' && this.state.totalPrice !== 0) {

				tempPrice = parseInt(e.target.value, 10) * this.state.product.price
				this.setState({ totalPrice: tempPrice })

				this.props.calculatePrice(
					this.state.product._id, 
					tempPrice, 
					this.state.product.name, 
					this.state.amount, 
					this.state.discount, 
					this.state.product.subscription
				);
			}
		}
	}

	handleChange = (evt) => {

		this.setState({ productValue: evt.target.value })

		if (evt.target.value === '') {
			this.setState({ productVisibility: false })
		} else {
			this.setState({ productVisibility: true })
		}
	}

	handleClickOutside = evt => {
		this.setState({ productVisibility: false })
	};

	renderProducts = () => {

		var productValue = this.state.productValue

		return this.props.product.map((item) => {

			return item.product.map((product, key) => {

				if (product.name.toLowerCase().includes(productValue.toLowerCase())) {
					return <ProductDropdown 
						key={key} 
						name={product.name} 
						setProduct={(e) => this.setProduct(e, product)}
					/>
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
					<Input
						width="65px"
						marginRight="4px"
						marginTop="0px"
						marginBottom="0px"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<Input
						width="65px"
						marginRight="4px"
						marginTop="0px"
						marginBottom="0px"
						value={this.state.discount}
						onChange={this.onDiscountChange}
					/>
					<Input
						readOnly
						width="65px"
						marginTop="0px"
						marginBottom="0px"
						value={this.state.totalPrice}
					/>
				</ProductWrapper>
			</div>
		);
	}
}

function mapStateToProps(state, prop) {
	return {
		product: state.product,
		saveProduct: state.saveProduct,
		chosenProducts: state.chosenProducts
	}
}
var productsFields = onClickOutside(ProductsFields);

export default connect(mapStateToProps, { fetchProducts, saveProducts, chosenProducts })(productsFields)



