//#region imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../Actions/productAction';

import TableComponent from '../Components/table';

import { TD, TR } from '../Styles/table';
//#endregion imports

const tableHeaders = { titel: "Titel", beskrivelse: "Beskrivelse", pris: "Pris", type: "Type" };

class Product extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    renderProducts = () => {
        return this.props.product.map((array, index) => {
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
    }

    render() {
        return (
            <div style={{ width: '100%' }}>
                <h2>Produkt oversigt</h2>

                <TableComponent
                    searhPlaceholder={'Søg efter produkt...'}
                    tableColumns={tableHeaders}
                    renderTableRows={this.renderProducts()}
                    height={'325px'}
                />

            </div>
        )
    }
}

function mapStateToProps(state, prop) {
    return {
        product: state.product
    }
}

export default connect(mapStateToProps, { fetchProducts })(Product);
