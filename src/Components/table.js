import React, { Component } from 'react'
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { TableWrapper, Table, TD, TH, TR } from '../Styles/table'

class TableComponent extends Component {
    render() {
        return (
            <div style={{width:'100%'}}>
                <TableWrapper height={this.props.height} width={this.props.width}>
                    <Table>
                        <tbody>
                            <TR style={{backgroundColor: '#E3E5E5'}}>
                                <TH>{this.props.th1}</TH>
                                <TH>{this.props.th2}</TH>
                                <TH>{this.props.th3}</TH>
                                <TH>{this.props.th4}</TH>
                            </TR>
                                {this.props.renderTableRows}
                        </tbody>
                    </Table>
                </TableWrapper>
            </div>
        )
    }
}
export default TableComponent;