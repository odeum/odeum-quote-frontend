import React, { Component } from 'react';
import { TotalPriceWrapper, Label, Input } from '../../Styles/createNewQuote';

 class TotalPrice extends Component {
    render() {
        return (
            <div style={{marginLeft: 'auto'}}>
                <TotalPriceWrapper>
                    <Label marginRight="3px" width="45px" paddingTop="7px" style={{ marginTop: '0px' }}>I alt:</Label>
                    <Input readOnly style={{ marginTop: '0px', marginBottom: '0px' }} value={this.props.totalPrice} />
                </TotalPriceWrapper>
            </div>
        )
    }
}
export default TotalPrice; 