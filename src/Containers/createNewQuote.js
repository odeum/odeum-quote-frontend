//#region imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomers } from '../Actions/customerAction';
import { fetchProducts } from '../Actions/productAction';
import { fetchQuote } from '../Actions/quoteAction'; 
import { Wrapper, LeftSideWrapper, RightSideWrapper } from '../Styles/createNewQuote';
import { TR, TD } from '../Styles/table';
import { ButtonPanel, Button } from 'odeum-ui';
import ProductsFields from './productFields';
import SaveButton from '../Components/CreateNewQuote/saveButton';
import QuoteDescription from '../Components/CreateNewQuote/quoteDescription';
import AddProduct from '../Components/CreateNewQuote/addProduct';
import TotalPrice from '../Components/CreateNewQuote/totalPrice';
import TableComponent from '../Components/table';

//#endregion imports

const tableHeaders = { th1: 'Virksomhed', th2: 'E-mail', th3: 'Telefon' }
class CreateNewQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDown: [],
            selectedCustomer: 0,
            value: '',
            titleDescribtion: '', 
            textDescribtion:''
        };
    }

    //#region small functions
    selectCustomerRow = (event, item) => {
        this.setState({
            selectedCustomer: item.orgId
        })
        
    }
    componentDidMount() {

        this.props.fetchCustomers();
        this.props.fetchProducts();
    }
    

    onAddBtnClick = (event) => {
        const dropDown = this.state.dropDown;
        this.setState({
            dropDown: dropDown.concat(
                <ProductsFields key={Math.random(36).toString()}/>
            )
        });
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
                    else
                        return null
                })
            })
        }
    }

    onHandle = (e) => {
        this.setState({
            value: e.target.value,
            titleDescribtion: e.target.value
        })
    }

    onHandleTitle = (e) => {
        this.setState({
            titleDescribtion: e.target.value
        })
    }

    onHandleDescription = (e) => {
        this.setState({
            textDescribtion: e.target.value
        })
    }

    saveQuote = () => {
        var values 
         const {titleDescribtion, textDescribtion, selectedCustomer} = this.state
         if(titleDescribtion === '' || selectedCustomer === 0){
            console.log('get fucked mate'); 
         }else{
            this.props.fetchQuote(values, selectedCustomer, titleDescribtion, textDescribtion, this.props.calculatePrice );
         }
   
    }

    calculateTotalPrice = () => {
        var temp = 0
        this.props.calculatePrice.arr.forEach(item => {
             temp += item.price
        });
        return temp
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
                        titleValue={this.state.titleDescribtion} 
                        descriptionValue={this.state.textDescribtion} 
                        onChangeTitle={this.onHandleTitle} 
                        onChangeDescription={this.onHandleDescription}/>
                    </LeftSideWrapper>

                    {/* Wrapper for the right section of the page */}
                    <RightSideWrapper>

                        {/* The fields for choosing products (renders one column) */}
                        <AddProduct />
                        <ProductsFields/>
                        {this.state.dropDown.map((i) => {
                            return i;
                        })}
                        {/* Add button - renders a new field for products on onClick */}
                        <ButtonPanel justify='right'>
                            <Button onClick={this.onAddBtnClick} icon='add_circle_outline' label={'Ny række'} size={'small'} />
                        </ButtonPanel>

                        {/* Calculates the total price of the chosen products */}
                        <TotalPrice totalPrice={this.calculateTotalPrice()}/>

                        {/* Save button - creates a PDF file of the quote */}
                        <SaveButton onClick={this.saveQuote} />
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
        calculatePrice: state.calculatePrice
    }
}

export default connect(mapStateToProps, { fetchCustomers, fetchProducts, fetchQuote })(CreateNewQuote);