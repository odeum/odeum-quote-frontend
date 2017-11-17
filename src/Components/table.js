import React, { Component } from 'react'
import { TableWrapper, Table, TH, TR} from '../Styles/table'
import { H1, Input } from '../Styles/createNewQuote'

class TableComponent extends Component {    
    renderFromProps() {
        return Object.entries(this.props.tableColumns).map((propKey, index) => 
         { return <TH key={index}>{propKey[1]}</TH>
         });
      }

    render() {
        return (
            <div style={{width:'100%'}}>
            <H1>{this.props.title}</H1>
            <Input placeholder={this.props.searhPlaceholder} />
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