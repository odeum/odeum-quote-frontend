import React, { Component } from 'react'
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { fetchCustomers } from '../Actions/customerAction';
import { TableWrapper, Table, TD, TH, TR } from '../Styles/createNewQuote'
import CustomerTable from '../Components/customerTable'

class Customer extends Component {
    componentDidMount(){
        this.props.fetchCustomers();
    }

    renderCustomers = () => {
       return this.props.customer.map((array, index) => {
            //console.log('customerArray', array);
            return Object.entries(array).map((item, index) => {
               // console.log('cutomerItem', item);
                return (
                    <TR key={index}>
                        <TD>{item[1].orgName}</TD>
                        <TD>{item[1].contactEmail}</TD>
                        <TD>{item[1].contactPhone}</TD>
                    </TR>
                )
            })
        })
    }

    render() {
        return (
            <div>
                <h2>kunder</h2>
                <CustomerTable customer={this.props.customer} th1={'virksomhed'} th2={'email'} th3={'telefon'} renderTableRows={this.renderCustomers()}/>
            </div>
        )
    }
}

function mapStateToProps(state, prop){
    return{
        customer: state.customer
    }
}
export default connect(mapStateToProps, {fetchCustomers})(Customer);