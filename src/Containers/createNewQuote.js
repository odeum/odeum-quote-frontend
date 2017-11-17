import React, { Component } from 'react';
import { Wrapper, LeftSideWrapper, RightSideWrapper, Input, TableWrapper, Table, TD, TH, TR, TextArea, ProductWrapper, LabelWrapper, Label, TotalPriceWrapper } from '../Styles/createNewQuote';
import ProductsFields from '../Components/renderProductFields';
import SaveButton from '../Components/saveButton';
import QuoteDescription from '../Components/quoteDescription';
import AddProduct from '../Components/addProduct';
import TotalPrice from '../Components/totalPrice';
import { connect } from 'react-redux';
import { fetchCustomers } from '../Actions/customerAction';
import TableComponent from '../Components/table';

class CreateNewQuote extends Component {
    constructor(props) {
        super(props);
        this.state = { dropDown: [] };
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
                <Wrapper>
                    <LeftSideWrapper>
                        <TableComponent
                            title={'Vælg kunde:'}
                            searhPlaceholder={'Søg efter kunde...'}
                            th1={'Virksomhed'}
                            th2={'Email'}
                            th3={'Telefon'}
                            renderTableRows={this.renderCustomers()}
                        />
                        <QuoteDescription />
                    </LeftSideWrapper>
                    <RightSideWrapper>
                         <AddProduct onAddBtnClick={this.onAddBtnClick}/> 
                        {this.state.dropDown.map((i) => {
                            return i; 
                        })}
                        <TotalPrice />
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