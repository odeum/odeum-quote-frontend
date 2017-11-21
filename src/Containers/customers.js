import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomers } from '../Actions/customerAction';
import { TD, TR } from '../Styles/table';
import CustomerTable from '../Components/table'

const tableHeaders = { th1: "virksomhed", email: "email", telefon: "telefon" }

class Customer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        this.props.fetchCustomers();
    }

    renderCustomers = () => {
        const { customer } = this.props
        var value = this.state.value
        if (!value) {
            return customer.map((array, index) => {
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
        } else {
            return customer.map((array, index) => {
                return Object.entries(array).map((item, index) => {
                    if (item[1].orgName.toLowerCase().includes(value.toLowerCase())) {
                        return (
                            <TR key={index}>
                                <TD>{item[1].orgName}</TD>
                                <TD>{item[1].contactEmail}</TD>
                                <TD>{item[1].contactPhone}</TD>
                            </TR>
                        )
                    } else {
                        return (
                         null
                        )
                    }
                })
            })
        }
    }

    onHandle = (e) => {
        this.setState({
            value: e.target.value
        })
    }


    render() {
        return (
            <div style={{width: '100%'}}>
                <h2>Kunde oversigt</h2>
                <CustomerTable 
                    onChange={this.onHandle} 
                    value={this.state.value}
                    searhPlaceholder={'Søg efter kunde...'}
                    height={'325px'}
                    customer={this.props.customer} 
                    tableColumns={tableHeaders} 
                    renderTableRows={this.renderCustomers()}
                />
            </div>
        )
    }
}

function mapStateToProps(state, prop) {
    return {
        customer: state.customer
    }
}

export default connect(mapStateToProps, { fetchCustomers })(Customer);