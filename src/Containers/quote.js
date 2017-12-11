//#region imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { convertPriceToEu } from '../Components/HelperFuncs/convertPrice';

import { fetchQuotation } from '../Actions/quoteAction';
import { fecthOneCustomer } from '../Actions/customerAction';

import TableComponent from '../Components/table';

import { TD, TR } from '../Styles/table';
//#endregion imports

const tableHeaders = { h1: 'Titel', h2: 'Kunde', h4: 'Status', h5: 'Pris' };

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    componentDidMount() {
        this.props.fetchQuotation() 
    }

    oneCustomer = () => {
        const { fecthOneCustomer } = this.props
        var customerId = []
        console.log(customerId)
        fecthOneCustomer(customerId);
        return this.props.quotation.map((array, index) => {
            return array.quotation.map((item, index) => {
                return (
                    customerId.push(item.customerID)
                )
            })
        }) 
       
    }

    selectedQuote = (e, item) => {
        console.log(item)
    }

    handleSearchInput = (e) => {
        this.setState({ searchValue: e.target.value })
    }

    renderQuote = () => {
        var value = this.state.searchValue
        
        if (!value) {
            console.log(this.props.quotation)
            return this.props.quotation.map((array, index) => {
                console.log(array)
                return array.quotation.map((item, index) => {
                    var splitTotalprice = convertPriceToEu(item.totalPrice)
                    return (
                        <TR key={index} onClick={(e) => { this.selectedQuote(e, item) }}>
                            {item.description.map((d, index) => {
                                return (
                                    <TD key={index}>{d.title}</TD>
                                )
                            })}
                            <TD>{item.customerName}</TD>
                            <TD>{item.status}</TD>
                            <TD>{splitTotalprice} kr.</TD>
                        </TR>
                    )

                })
            })
        } else {
            return this.props.quotation.map((array, index) => {
                return array.quotation.map((item, index) => {
                    var splitTotalprice = convertPriceToEu(item.totalPrice)
                    return (
                        item.description.map((d, index) => {
                            if (d.title.toLowerCase().includes(value.toLocaleLowerCase())) {
                                return (
                                    <TR key={index} onClick={this.selectedQuote}>
                                        <TD key={index}>{d.title}</TD>
                                        <TD>{item.customerID}</TD>
                                        <TD>{item.status}</TD>
                                        <TD>{splitTotalprice} kr.</TD>
                                    </TR>
                                )

                            } else { return null }
                        })
                    )
                })
            })

        }
    }

    render() {
        return (
            <div style={{ width: '100%' }}>
                <h2>Tilbuds oversigt</h2>

                <TableComponent
                    value={this.state.searchValue}
                    searhPlaceholder={'Søg efter produkt...'}
                    tableColumns={tableHeaders}
                    onChange={this.handleSearchInput}
                    renderTableRows={this.renderQuote()}
                    height={'325px'}
                />

            </div>
        )
    }
}

function mapStateToProps(state, prop) {
    return {
        quotation: state.quotation,
        oneCustomer: state.oneCustomer
    }
}

export default connect(mapStateToProps, { fetchQuotation, fecthOneCustomer })(Quote);
