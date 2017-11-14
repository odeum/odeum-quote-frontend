import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import * as CartActions from '../Actions/add_to_cart'; 
import Shelf from './sheif'; 

class Cart extends Component {
    constructor(props){
        super(props); 

    }
  render() {
      const CartItems = this.props.cart.map((item, idx) => {
          console.log(item)
          return <li key={idx}>{item}</li>
      })
    return (
      <div>
        <Shelf addItem={this.props.action.addToCart} />
        <h2>Shopping bag</h2>
        <pl>
        {CartItems}
        </pl>
      </div>
    )
  }
}

function mapStateToProps(state, prop){
    return{
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);; 
