import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import {fetchProducts} from '../Actions/productAction';
import { TableWrapper, Table, TD, TH, TR } from '../Styles/createNewQuote'

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
          return (/*<h3 key={index}>{item.name}</h3>*/
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
      <div>
       {/* <Shelf addItem={this.props.action.addToCart} />*/}
       <h2>Produkter</h2>
        <TableWrapper>
            <Table>
                <tbody>
                    <TR style={{backgroundColor: '#E3E5E5'}}>
                        <TH>Titel</TH>
                        <TH>Beskrivelse</TH>
                        <TH>Pris</TH>
                        <TH>Type</TH>
                    </TR>
                        {fetchProducts}
                </tbody>
            </Table>
        </TableWrapper>
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
