//#region imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ButtonPanel, Button } from 'odeum-ui'

import { fetchCustomers } from '../Actions/customerAction'
import { fetchProducts } from '../Actions/productAction'
import { saveQuote } from '../Actions/quoteAction'
import { fetchSalesPerson } from '../Actions/salesPersonAction';

import QuoteDescription from '../Components/CreateNewQuote/quoteDescription'
import AddProduct from '../Components/CreateNewQuote/addProduct'
import TotalPrice from '../Components/CreateNewQuote/totalPrice'
import TableComponent from '../Components/table'
import PDFcontent from '../Components/PDFcontent'
import PopupWindow from '../Components/popupWindow'

import ProductsFields from './productFields'
import { downloadPDF } from './pdf'

import { Wrapper, LeftSideWrapper, RightSideWrapper } from '../Styles/createNewQuote'
import { TR, TD } from '../Styles/table'
//#endregion imports

const tableHeaders = { th1: 'Virksomhed', th2: 'E-mail', th3: 'Telefon' }
class CreateNewQuote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dropDown: [],
            selectedCustomerId: 0,
            selectedCustomer: {},
            value: '',
            titleDescription: '',
            textDescription: '',
            showPopup: false
        }
    }

    //#region small functions
    selectCustomerRow = (event, item) => {
        this.setState({
            selectedCustomerId: item.orgId,
            selectedCustomer: item
        })
    }

    componentDidMount() {
        this.props.fetchCustomers();
        this.props.fetchProducts();
        this.props.fetchSalesPerson();
    }

    onAddBtnClick = (event) => {
        const dropDown = this.state.dropDown;
        this.setState({
            dropDown: dropDown.concat(
                <ProductsFields key={Math.random(36).toString()} />
            )
        });
    }

    onHandle = (e) => {
        this.setState({
            value: e.target.value,
            titleDescription: e.target.value
        })
    }

    onHandleTitle = (e) => {
        this.setState({
            titleDescription: e.target.value
        })
    }

    onHandleDescription = (e) => {
        this.setState({
            textDescription: e.target.value
        })
    }

    saveQuote = () => {
        var values
        const { titleDescription, textDescription, selectedCustomerId, selectedCustomer } = this.state

        if (titleDescription === '') {
            console.log('Du mangler en de title')
        }

        if (selectedCustomerId === 0) {
            console.log('Du mangler at vælge en kunde')
        }

        if (0 > this.props.chosenProducts.arr.length) {
            console.log('Du mangler at vælge en produkt')
        }

        else {
            this.togglePopup()
            this.props.saveQuote(values, selectedCustomerId, selectedCustomer.orgName, titleDescription, textDescription, this.props.chosenProducts);
        }
    }

    togglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    calculateTotalPrice = () => {
        var temp = 0
        this.props.chosenProducts.arr.forEach(item => {
            temp += item.price
        });
        return temp
    }

    downloadPDF = () => {
        var salesPerson = this.props.salesPerson
        var description = this.state.textDescription
        var title = this.state.titleDescription
        var productTable = this.props.chosenProducts.arr
        var totalPrice = this.calculateTotalPrice();
        downloadPDF(description, title, productTable, totalPrice, salesPerson);
    }
    //#endregion small functions

    renderCustomers = () => {
        /* Gets the customer information for the customer table */
        var value = this.state.value;

        if (!value) {
            return this.props.customer.map((array, index) => {
                return Object.entries(array).map((item, index) => {

                    return (
                        <TR key={index} onClick={(e) => { this.selectCustomerRow(e, item[1]) }} style={{ backgroundColor: this.state.selectedCustomer === item[1] ? '#D3D3D3' : '' }}>
                            <TD>{item[1].orgName}</TD>
                            <TD>{item[1].contactEmail}</TD>
                            <TD>{item[1].contactPhone}</TD>
                        </TR>
                    )

                })
            })
        } else {

            return this.props.customer.map((array, index) => {
                return Object.entries(array).map((item, index) => {
                    if (item[1].orgName.toLowerCase().includes(value.toLowerCase())
                        || item[1].contactEmail.toLowerCase().includes(value.toLowerCase()))

                        return (
                            <TR key={index} onClick={(e) => { this.selectCustomerRow(e, item[1]) }}>
                                <TD>{item[1].orgName}</TD>
                                <TD>{item[1].contactEmail}</TD>
                                <TD>{item[1].contactPhone}</TD>
                            </TR>
                        )

                    else return null
                })
            })
        }
    }

    render() {
        return (
            <div>
                {/* Wrapps the whole page */}
                <Wrapper>
                    {/* Wrapper for the left section of the page */}
                    <LeftSideWrapper>

                        {/* The search field and table for customer */}
                        <TableComponent
                            title={'Vælg kunde:'}
                            searhPlaceholder={'Søg efter kunde...'}
                            tableColumns={tableHeaders}
                            renderTableRows={this.renderCustomers()}
                            onChange={this.onHandle}
                            value={this.state.value}
                        />

                        {/*Title input and description input */}
                        <QuoteDescription
                            titleValue={this.state.titleDescription}
                            descriptionValue={this.state.textDescription}
                            onChangeTitle={this.onHandleTitle}
                            onChangeDescription={this.onHandleDescription}
                        />

                    </LeftSideWrapper>

                    {/* Wrapper for the right section of the page */}
                    <RightSideWrapper>

                        {/* The fields for choosing products (renders one column) */}
                        <AddProduct />
                        <ProductsFields />

                        {this.state.dropDown.map((i) => {
                            return i;
                        })}

                        {/* Add button - renders a new field for products on onClick */}
                        <ButtonPanel justify='right'>
                            <Button onClick={this.onAddBtnClick} icon='add_circle_outline' label={'Ny række'} size={'small'} />
                        </ButtonPanel>

                        {/* Calculates the total price of the chosen products */}
                        <TotalPrice totalPrice={this.calculateTotalPrice()} />

                        {/* This div is invisible. The reason it's there, is so that we can get the id from the div,
                            to get the elements from the PDFcontent component, for the downloadPDF function */}
                        <div id="content" style={{ display: 'none' }}>
                            <PDFcontent chosenCustomer={this.state.selectedCustomer} title={this.state.titleDescription} description={this.state.textDescription} />
                        </div>

                        {/* ButtonPanel - the first button downloads the PDF file,
                            the second button sends the quote to the customer */}
                        <ButtonPanel justify='right' style={{ marginRight: '0px', marginTop: '5px' }}>
                            <Button onClick={this.downloadPDF} icon='visibility' label={'Vis tilbud'} size={'small'} />
                            <Button onClick={this.saveQuote} icon='check_circle' label={'Opret tilbud'} size={'small'} />
                            {this.state.showPopup ?
                                <PopupWindow text='Tilbuddet blev oprettet' closePopup={this.togglePopup} closeModal={this.togglePopup} /> : null
                            }
                        </ButtonPanel>

                    </RightSideWrapper>
                </Wrapper>
            </div>
        );
    }
}

function mapStateToProps(state, prop) {
    return {
        customer: state.customer,
        product: state.product,
        chosenProducts: state.chosenProducts,
        salesPerson: state.salesPerson
    }
}

export default connect(mapStateToProps, { fetchCustomers, fetchProducts, saveQuote, fetchSalesPerson })(CreateNewQuote);