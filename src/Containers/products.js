import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import {fetchProducts} from '../Actions/productAction';

class Product extends Component {
    constructor(props){
        super(props); 

    }
    componentDidMount(){
       
        this.props.fetchProducts();
    }
  render() {
  const fetchProducts = this.props.product.map((array, index) => {
      console.log('render', array);
      return array.product.map((item, index) => {
          console.log('array', item.name);
          return (<h3 key={index}>{item.name}</h3>)
      });
  });
    return (
      <div>
       {/* <Shelf addItem={this.props.action.addToCart} />*/}
        <h2>Shopping bag</h2>
       {fetchProducts}
      </div>
    )
  }
}

function mapStateToProps(state, prop){
    return{
        product: state.product
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         action: bindActionCreators(fetchProducts, dispatch)
//     }
// }

export default connect(mapStateToProps, {fetchProducts})(Product);; 
