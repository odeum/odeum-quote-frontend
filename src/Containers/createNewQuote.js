//#region imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomers } from '../Actions/customerAction';
import { fetchProducts } from '../Actions/productAction';
import { Wrapper, LeftSideWrapper, RightSideWrapper } from '../Styles/createNewQuote';
import { TR, TD } from '../Styles/table';
import { ButtonPanel, Button } from 'odeum-ui';
import ProductsFields from '../Components/CreateNewQuote/renderProductFields';
import SaveButton from '../Components/CreateNewQuote/saveButton';
import QuoteDescription from '../Components/CreateNewQuote/quoteDescription';
import AddProduct from '../Components/CreateNewQuote/addProduct';
import TotalPrice from '../Components/CreateNewQuote/totalPrice';
import TableComponent from '../Components/table';
import ProductDropdown from '../Components/CreateNewQuote/productDropdown';
//#endregion imports

const tableHeaders = { th1: 'Virksomhed', th2: 'E-mail', th3: 'Telefon' }
class CreateNewQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDown: [],
            selected: {},
            value: '',
            productValue: '',
            productVisibility: false,
            totalPrice: 0
        };
    }

    //#region small functions
    selectCustomerRow = (event, item) => {
        this.setState({
            selected: item,
        }),
        console.log('clicked', item);
    }

    componentDidMount() {
        this.props.fetchCustomers();
        this.props.fetchProducts();
    }

    onAddBtnClick = (event) => {
        const dropDown = this.state.dropDown;
        this.setState({
            dropDown: dropDown.concat(
            <ProductsFields 
                value={this.state.productValue} 
                renderChildren={this.renderProducts()} 
                handleChange={this.handleChange} 
                visbilty={this.state.productVisibility}
                price={this.state.totalPrice}
            />
            )
        });
    }
    //#endregion small functions


    //#region product
    handleChange = (evt) => {
        this.setState({productValue: evt.target.value})
        if(evt.target.value === '') {
            this.setState({productVisibility: false})
        } else {
            this.setState({productVisibility: true})
        }
    }
    
    setProduct = (event, product) => {
        console.log(product.price)
        this.setState({
            productVisibility: false,
            productValue: product.name,
            totalPrice: product.price        
        })
    }

    renderProducts = () => {
        var productValue = this.state.productValue
            return this.props.product.map((item) => {
                return item.product.map((product, key) => {
                    if (product.name.toLowerCase().includes(productValue.toLowerCase())) {
                        return <ProductDropdown key={key} name={product.name} setProduct={(e) => {this.setProduct(e, product)}}/>
                    } else {
                        return null;
                    }
                })
            })  
    }
    //#endregion product 

    renderCustomers = () => {
        /* Gets the customer information for the customer table */
        var value = this.state.value;
        if (!value) {
            return this.props.customer.map((array, index) => {
                return Object.entries(array).map((item, index) => {
                    return (
                        <TR key={index} onClick={(e) => {this.selectCustomerRow(e, item[1])}} style={{backgroundColor: this.state.selected === item[1] ? '#D3D3D3' : ''}}>
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
            value: e.target.value
        })
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
                        <QuoteDescription />
                    </LeftSideWrapper>

                    {/* Wrapper for the right section of the page */}
                    <RightSideWrapper>

                        {/* The fields for choosing products (renders one column) */}
                        <AddProduct />
                        <ProductsFields 
                            value={this.state.productValue} 
                            renderChildren={this.renderProducts()} 
                            handleChange={this.handleChange} 
                            visbilty={this.state.productVisibility}
                            price={this.state.totalPrice}
                        />
                        {this.state.dropDown.map((i) => {
                            return i;
                        })}
                        {/* Add button - renders a new field for products on onClick */}
                        <ButtonPanel justify='right'>
                            <Button onClick={this.onAddBtnClick} icon='add_circle_outline' label={'Ny kolonne'} size={'small'} />
                        </ButtonPanel>

                        {/* Calculates the total price of the chosen products */}
                        <TotalPrice />

                        {/* Save button - creates a PDF file of the quote */}
                        <SaveButton />
                    </RightSideWrapper>
                </Wrapper>
            </div>
        );
    }
}

function mapStateToProps(state, prop) {
    return {
        customer: state.customer,
        product: state.product
    }
}

export default connect(mapStateToProps, { fetchCustomers, fetchProducts })(CreateNewQuote);