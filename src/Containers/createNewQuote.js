import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomers } from '../Actions/customerAction';
import { Wrapper, LeftSideWrapper, RightSideWrapper } from '../Styles/createNewQuote';
import { TR, TD } from '../Styles/table';
import { ButtonPanel, Button } from 'odeum-ui';
import ProductsFields from '../Components/CreateNewQuote/renderProductFields';
import SaveButton from '../Components/CreateNewQuote/saveButton';
import QuoteDescription from '../Components/CreateNewQuote/quoteDescription';
import AddProduct from '../Components/CreateNewQuote/addProduct';
import TotalPrice from '../Components/CreateNewQuote/totalPrice';
import TableComponent from '../Components/table';

const tableHeaders = { th1: 'Virksomhed', th2: 'E-mail', th3: 'Telefon' }
class CreateNewQuote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dropDown: [],
            selected: {}
        };
    }

    selectCustomerRow = (event, item) => {
        this.setState({
            selected: item
        })
        console.log('clicked', item);
    }

    componentDidMount() {
        this.props.fetchCustomers();
    }

    onAddBtnClick = (event) => {
        const dropDown = this.state.dropDown;
        this.setState({
            dropDown: dropDown.concat(<ProductsFields key={dropDown.length} />)
        });
    }

    renderCustomers = () => {
        /* Gets the customer information for the customer table */
        return this.props.customer.map((array, index) => {
            return Object.entries(array).map((item, index) => {
                return (
                    <TR key={index} onClick={(e) => {this.selectCustomerRow(e, item[1])}}>
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
                        />

                        {/*Title input and description input */}
                        <QuoteDescription />
                    </LeftSideWrapper>

                    {/* Wrapper for the right section of the page */}
                    <RightSideWrapper>

                        {/* The fields for choosing products (renders one column) */}
                        <AddProduct/>
                        {this.state.dropDown.map((i) => {
                            return i;
                        })}

                        {/* Add button - renders a new field for products on onClick */}
                        <ButtonPanel justify='right'>
                            <Button onClick={this.onAddBtnClick} icon='add_circle_outline' label={'Ny kolonne'} size={'small'}/>
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
        customer: state.customer
    }
}

export default connect(mapStateToProps, { fetchCustomers })(CreateNewQuote);