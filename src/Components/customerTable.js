import React, { Component } from 'react'
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { TableWrapper, Table, TD, TH, TR } from '../Styles/createNewQuote'

class CustomerTable extends Component {
    componentdidUpdate(){
        this.props.customer
    }


    render() {
        return (
            <div>
                <TableWrapper>
                    <Table>
                        <tbody>
                            <TR style={{backgroundColor: '#E3E5E5'}}>
                                <TH>{this.props.th1}</TH>
                                <TH>{this.props.th2}</TH>
                                <TH>{this.props.th3}</TH>
                            </TR>
                                {this.props.renderTableRows}
                        </tbody>
                    </Table>
                </TableWrapper>
            </div>
        )
    }
}
export default CustomerTable;