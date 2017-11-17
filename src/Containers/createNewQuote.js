import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomers } from '../Actions/customerAction';
import { Wrapper, LeftSideWrapper, RightSideWrapper } from '../Styles/createNewQuote';
import { TR, TD } from '../Styles/table';
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
                            tableColumns={tableHeaders}
                            renderTableRows={this.renderCustomers()}
                        />
                        <QuoteDescription />
                    </LeftSideWrapper>
                    <RightSideWrapper>
                        <AddProduct onAddBtnClick={this.onAddBtnClick} />
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