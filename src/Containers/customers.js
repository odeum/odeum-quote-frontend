import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { fetchCustomers } from '../Actions/customerAction';
import { TD, TR } from '../Styles/table';
import CustomerTable from '../Components/table'

const tableHeaders = { th1:"virksomhed", email:"email", telefon:"telefon"}

class Customer extends Component {
    constructor(props) {
        super(props)
        this.state={
            filter: ''
        }
    }

    componentDidMount() {
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
            <div>
                <input value={this.state.filter}/>
                <h2>kunder</h2>
                <CustomerTable customer={this.props.customer} tableColumns={tableHeaders} renderTableRows={this.renderCustomers()}/>
            </div>
        )
    }
}

function mapStateToProps(state, prop) {
    return{
        customer: state.customer
    }
}

export default connect(mapStateToProps, {fetchCustomers})(Customer);