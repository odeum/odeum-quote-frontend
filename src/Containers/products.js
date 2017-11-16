import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import {fetchProducts} from '../Actions/productAction';
import { TableWrapper, Table, TD, TH, TR } from '../Styles/createNewQuote';
import TableComponent from '../Components/table';

class Product extends Component {
    constructor(props){
        super(props); 
    }

    componentDidMount(){    
        this.props.fetchProducts();
    }

    render() {
    const fetchProducts = this.props.product.map((array, index) => {
            return array.product.map((item, index) => {
            return (
                <TR key={index}>
                    <TD>{item.name}</TD>
                    <TD>{item.description}</TD>
                    <TD>{item.price}</TD>
                    <TD>{item.subscription}</TD>
                </TR>
            )
        });
    });

    return (
      <div style={{width: '100%'}}>
        {/* <Shelf addItem={this.props.action.addToCart} />*/}
        <h2>Produkter</h2>

        <TableComponent
            height={'300px'}
            th1={'Titel'}
            th2={'Beskrivelse'}
            th3={'Pris'}
            th4={'Type'}
            renderTableRows={fetchProducts}
        />
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
