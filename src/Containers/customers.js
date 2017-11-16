import React, { Component } from 'react'
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { fetchCustomers } from '../Actions/customerAction';
import { TD, TR } from '../Styles/table'
import TableComponent from '../Components/table'

class Customer extends Component {
    componentDidMount(){
        this.props.fetchCustomers();
    }

    renderCustomers = () => {
       return this.props.customer.map((array, index) => {
            return Object.entries(array).map((item, index) => {
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
            <div style={{width:'100%'}}>
                <h2>kunder</h2>
                <TableComponent
                    height={'300px'}
                    th1={'Virksomhed'}
                    th2={'Email'}
                    th3={'Telefon'}
                    renderTableRows={this.renderCustomers()}
                />
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