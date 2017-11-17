import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import {fetchProducts} from '../Actions/productAction';
import { TD, TR } from '../Styles/createNewQuote';
import TableComponent from '../Components/table';

class Product extends Component {
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

export default connect(mapStateToProps, {fetchProducts})(Product);
