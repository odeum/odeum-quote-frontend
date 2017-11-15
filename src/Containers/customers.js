import React, { Component } from 'react'
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { fetchCustomers } from '../Actions/customerAction';
import { TableWrapper, Table, TD, TH, TR } from '../Styles/createNewQuote'

class Customer extends Component {
    componentDidMount(){
        this.props.fetchCustomers();
    }

    render() {
        const renderCustomer = this.props.customer.map((array, index) => {
            //console.log(array)
            return Object.entries(array).map((item, index) => {
                console.log(item)
                return (/*<h3 key={key}>{item[1].orgName, }</h3>*/
                    <TR key={index}>
                        <TD>{item[1].orgName}</TD>
                        <TD>{item[1].contactEmail}</TD>
                        <TD>{item[1].contactPhone}</TD>
                    </TR>
                )
            })
        })
        return (
            <div>
                <h2>Kunder</h2>
                <TableWrapper>
                    <Table>
                        <tbody>
                            <TR style={{backgroundColor: '#E3E5E5'}}>
                                <TH>Virksomhed</TH>
                                <TH>E-mail</TH>
                                <TH>Telefon</TH>
                            </TR>
                                {renderCustomer}
                        </tbody>
                    </Table>
                </TableWrapper>
            </div>
        )
    }
}

function mapStateToProps(state, prop){
    return{
        customer: state.customer
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         action: bindActionCreators(fetchCustomers, dispatch)
//     }
// }

export default connect(mapStateToProps, {fetchCustomers})(Customer);