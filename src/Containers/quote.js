import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { fetchQuotation } from '../Actions/quoteAction';
import { TD, TR } from '../Styles/table';
import TableComponent from '../Components/table';

const tableHeaders = {h1:'Titel', h2:'Kunde', h4:'Pris', h5:'Status' };

class Quote extends Component {
 componentDidMount(){
     this.props.fetchQuotation();
 }

    render() {
        console.log(this.props.quotation)
        const fetchQuotation = this.props.quotation.map((array, index) => {
            console.log(array)
            return array.quotation.map((item, index) => {
                return (
                <TR key={index}>
               {item.description.map((d, index) => {
                    return (
                        <TD key={index}>{d.title}</TD>
                    )
                })}
                    <TD>{item.totalPrice}</TD>
                    <TD>{item.status}</TD>
                </TR>
            )
        });
    });

    return (
      <div style={{width: '100%'}}>
        <h2>tilbuds oversigt</h2>
        <TableComponent 
            searhPlaceholder={'Søg efter produkt...'}
            tableColumns={tableHeaders}
            renderTableRows={fetchQuotation}
            height={'325px'}
        />
      </div>
    )
  }
}

function mapStateToProps(state, prop){
    return{
        quotation: state.quotation
    }
}

export default connect(mapStateToProps, {fetchQuotation})(Quote);
