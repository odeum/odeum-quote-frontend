import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import {fetchProducts} from '../Actions/productAction';
import { TD, TR } from '../Styles/table';
import TableComponent from '../Components/table';

const tableHeaders = { titel:"Titel", beskrivelse:"Beskrivelse", pris:"Pris", type:"Type" };

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
        <h2>Produkt oversigt</h2>
        <TableComponent 
            searhPlaceholder={'Søg efter produkt...'}
            tableColumns={tableHeaders}
            renderTableRows={fetchProducts}
            height={'325px'}
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
