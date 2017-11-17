import React, { Component } from 'react'
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { TableWrapper, Table, TD, TH, TR } from '../Styles/table'

class TableComponent extends Component {    
    renderFromProps() {
        return Object.entries(this.props.tableColumns).map((propKey, index) => 
         { return <TH key={index}>{propKey[1]}</TH>
         });
      }

    render() {
        return (
            <div style={{width:'100%'}}>
                <TableWrapper height={this.props.height} width={this.props.width}>
                    <Table>
                        <tbody>
                            <TR style={{backgroundColor: '#E3E5E5'}}>
                            { this.renderFromProps()}
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