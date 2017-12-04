import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuotation } from '../Actions/quoteAction';
import { TD, TR } from '../Styles/table';
import TableComponent from '../Components/table';

const tableHeaders = { h1: 'Titel', h2: 'Kunde', h4: 'Pris', h5: 'Status' };

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    componentDidMount() {
        this.props.fetchQuotation();
    }

    renderQuote = () => {
        var value = this.state.searchValue
        if (!value) {

            return this.props.quotation.map((array, index) => {
                return array.quotation.map((item, index) => {

                    return (
                        <TR key={index}>

                            {item.description.map((d, index) => {
                                return (
                                    <TD key={index}>{d.title}</TD>
                                )
                            })}

                            <TD>{item.customerID}</TD>
                            <TD>{item.totalPrice}</TD>
                            <TD>{item.status}</TD>
                            
                        </TR>
                    )

                })
            })

        } else {

            return this.props.quotation.map((array, index) => {
                return array.quotation.map((item, index) => {
                    return (

                        item.description.map((d, index) => {
                            if(d.title.toLowerCase().includes(value.toLocaleLowerCase())){

                                return (
                                <TR>
                                    <TD key={index}>{d.title}</TD>
                                    <TD>{item.customerID}</TD>
                                    <TD>{item.totalPrice}</TD>
                                    <TD>{item.status}</TD>
                                </TR>
                                )

                            }
                        })

                    ) 
                })
            })
            
        }
    }

    handleSearchInput = (e) => {
        1
        this.setState({ searchValue: e.target.value })
    }


    render() {
        return (
            <div style={{ width: '100%' }}>

                <h2>tilbuds oversigt</h2>

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
        quotation: state.quotation
    }
}

export default connect(mapStateToProps, { fetchQuotation })(Quote);
